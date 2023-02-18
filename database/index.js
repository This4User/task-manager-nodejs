const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
	process.env.BD_NAME,
	process.env.BD_USER,
	process.env.BD_PASSWORD,
	{
		host: "localhost",
		dialect: "postgres",
		port: 4082,
	});


module.exports = sequelize;