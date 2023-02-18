const { Router } = require("express");
const router = new Router();
const taskController = require("../controllers/Task.controller");

router.post("/task", taskController.create);
router.get("/task", taskController.getBy);

module.exports = router;