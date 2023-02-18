const sequelize = require("../database/index");
const { DataTypes } = require("sequelize");
const UserModel = require("./User.model");
const ProjectModel = require("./Project.model");

const TaskModel = sequelize.define("task", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		unique: true,
	},
	name: { type: DataTypes.STRING },
	description: { type: DataTypes.STRING },
	isCompleted: { type: DataTypes.BOOLEAN, defaultValue: false },
	user_id: {
		type: DataTypes.INTEGER,
		references: {
			model: UserModel,
			key: "id",
		},
	},
	project_id: {
		type: DataTypes.INTEGER,
		references: {
			model: ProjectModel,
			key: "id",
		},
		notNull: false,
	},
});

module.exports = TaskModel;