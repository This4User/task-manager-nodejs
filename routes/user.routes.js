const { Router } = require("express");
const router = new Router();
const userController = require("../controllers/User.controller");

router.post("/user", userController.create);
router.post("/user/auth", userController.auth);
router.get("/user", userController.getAll);
router.get("/user/:id", userController.getById);
router.put("/user", userController.update);
router.delete("/user/:id", userController.delete);

module.exports = router;