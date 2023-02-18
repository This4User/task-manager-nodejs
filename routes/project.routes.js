const { Router } = require("express");
const router = new Router();
const projectController = require("../controllers/Project.controller");

router.post("/project", projectController.create);

module.exports = router;