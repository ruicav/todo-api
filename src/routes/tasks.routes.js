const express = require("express");
const router = express.Router();
const taskController = require("../controllers/tasks.controller");
const { verifyToken } = require("../services/auth.service");

router.get("/", verifyToken, taskController.get);
router.post("/", verifyToken, taskController.create);
router.put("/", verifyToken, taskController.bulkUpdate);
router.put("/:id", verifyToken, taskController.update);
router.delete("/:id", verifyToken, taskController.destroy);

module.exports = router;
