const userRouter = require("./user.routes");
const taskRouter = require("./task.routes");
const projectRouter = require("./project.routes");

module.exports = {
	routes: [
		userRouter,
		taskRouter,
		projectRouter
	]
}