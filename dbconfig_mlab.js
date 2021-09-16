const Sequelize = require("sequelize");
const path = require('path')
require("dotenv").config({ path: path.resolve(__dirname, './.env') 
});

const database = process.env.DB_DATABASE_DOD;
const username = process.env.DB_USER_DOD;
const password = process.env.DB_PASSWORD_DOD;
const port = process.env.DB_PORT_DOD;
const db_server = process.env.DB_HOST_DOD;

const sequelize = new Sequelize(database, username, password, {
    host: db_server,
    port: port,
    dialect: "postgres"
});

const connect = async () => {
    await sequelize
        .authenticate()
        .then(() => {
            console.log("Connection has been established successfully.");
        })
        .catch(err => {
            console.log("Unable to connect to the database:", err.message);
        });
    
};

//sequelize.authenticate().then(function(errors) { console.log(errors) });

const db = {
    sequelize: sequelize,
    connect
};

module.exports = db;
