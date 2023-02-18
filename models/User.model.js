const sequelize = require("../database/index");
const { DataTypes } = require("sequelize");

const UserModel = sequelize.define("user", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		unique: true,
	},
	name: { type: DataTypes.STRING },
	surname: { type: DataTypes.STRING },
	password: { type: DataTypes.STRING },
});

module.exports = UserModel;