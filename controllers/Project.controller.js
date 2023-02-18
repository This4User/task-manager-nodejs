const ProjectModel = require("../models/Project.model");

class ProjectController {
	async create(req, res) {
		const newProject = await ProjectModel.create(req.body);

		res.json(newProject);
	}
}

module.exports = new ProjectController();