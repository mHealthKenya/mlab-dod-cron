const sequelize = require("../dbconfig");
const Sequelize = require("sequelize");
const Joi = require("joi");

const Result = sequelize.sequelize.define(
    "results", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }
)

exports.Result = Result;