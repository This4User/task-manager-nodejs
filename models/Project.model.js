const sequelize = require("../database/index");
const { DataTypes } = require("sequelize");
const UserModel = require("./User.model");

const ProjectModel = sequelize.define("project", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		unique: true,
	},
	name: { type: DataTypes.STRING },
	description: { type: DataTypes.STRING },
	user_id: {
		type: DataTypes.INTEGER,
		references: {
			model: UserModel,
			key: "id",
		},
	},
});

module.exports = ProjectModel;