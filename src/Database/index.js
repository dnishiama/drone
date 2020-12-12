const Sequelize = require('sequelize');
const dbconfig = require('../Config/database');
const Drone = require('../Model/drone')

const connection = new Sequelize(dbconfig);

Drone.init(connection)


module.exports = connection;