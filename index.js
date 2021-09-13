const cron = require('node-cron');
const express = require('express');
const fs = require('fs');
var moment = require("moment");
var DATE_TODAY = moment(new Date()).format("YYYY-MM-DD");
var { Result } = require("./models/results.js");
const Op = Sequelize.Op;
const TODAY_START = new Date().setHours(0, 0, 0, 0);
const NOW = new Date();
require("dotenv").config({ path: path.resolve(__dirname, './.env') 
});

app = express();

// Schedule tasks to be run on the server every midnight.
// denote specific hiv tests and not all tests

    let results = Result.findAll({
        where: {
            created_at: {
                [Op.gt]: TODAY_START,
                [Op.lt]: NOW
            },
            
        }
        }).then(async function (results) {

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



app.listen(3000);