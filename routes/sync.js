const express = require('express');
const router = express.Router();
var moment = require("moment");
var request = require("request");
var DATE_TODAY = moment(new Date()).format("YYYY-MM-DD");
var { Result } = require("../models/results.js");
var { MlabResult } = require("../models_mlab/results");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const TODAY_START = new Date().setHours(0, 0, 0, 0);
const NOW = new Date();

const path = require('path');
require("dotenv").config({ path: path.resolve(__dirname, './.env') 
});

async function syncResults() {
// Schedule tasks to be run on the server every midnight.
// denote specific hiv tests and not all tests
//compare max is in dod server to what exists in the lims
//add lims_id in dod db

    try {

        let max_exsisting_result = await MlabResult.findOne({
            attributes: [
                [Sequelize.fn('MAX', Sequelize.col('lab7_id')), 'lab7_id']
            ]
        }) || 0;

        let results = await Result.findAll({
            where: {
                created_at: {
                    [Op.gt]: TODAY_START,
                    [Op.lt]: NOW
                },
                id: {
                    [Op.gte]: max_exsisting_result.id
                }
            }
            }).then(async function (results) {

                console.log(results);

                for(let result of results) {

                    var options = {

                        method: "POST",

                        url: process.env.ENDPOINT,
                            
                        headers: {
                
                            "Content-Type": "application/json",
                
                        },
                
                        body: result.dataValues,
                
                        json: true,
                
                    };

                    await request(options, function (error, response, body) {

                        if (error) {
            
                            console.log("result error",error)
            
                        } else if(response) {

                            if (response.statusCode == 200) {

                                Result.update({ updated_at: DATE_TODAY}, {
                                    where: {
                                        id: result.id,
                                    }
                                }); 

                            } else if(response.statusCode == 400) {

                                console.log("result error",error)

                            } else if (response.statusCode == 500) {

                                console.log("result error",error)

                            } 
                                
                        }

                    });  

                }
            
            });

        console.log(results);
    } catch (e) {
        console.log(e);
    }
}

router.get("/", async (req, res) => {
    await syncResults();

    res.send('now');
});

module.exports = router;