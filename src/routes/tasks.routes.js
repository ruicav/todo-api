const express = require("express");
const router = express.Router();
const taskController = require("../controllers/tasks.controller");
const { verifyToken } = require("../services/auth.service");

router.get("/", verifyToken, taskController.get);
router.post("/", verifyToken, taskController.create);

module.exports = router;
