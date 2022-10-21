const express = require("express");
const router = express.Router();
const projectsController = require("../controllers/projects.controller");
const { verifyToken } = require("../services/auth.service");

router.get("/", verifyToken, projectsController.get);
router.get("/:id", verifyToken, projectsController.get);
router.post("/", verifyToken, projectsController.create);
router.put("/:id", verifyToken, projectsController.update);
router.delete("/:id", verifyToken, projectsController.destroy);

module.exports = router;
