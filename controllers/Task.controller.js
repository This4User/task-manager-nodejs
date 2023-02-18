const TaskModel = require("../models/Task.model");

class TaskController {
	async create(req, res) {
		const newTask = await TaskModel.create(req.body);
		res.json(newTask);
	}

	async getBy(req, res) {
		const tasks = await TaskModel.findAndCountAll({
			where: req.body,
		});

		res.json(tasks);
	}
}

module.exports = new TaskController();