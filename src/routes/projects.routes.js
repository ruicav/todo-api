const express = require("express");
const router = express.Router();
const projectsController = require("../controllers/projects.controller");
const { verifyToken } = require("../services/auth.service");

router.get("/", verifyToken, projectsController.get);
router.post("/", verifyToken, projectsController.create);

module.exports = router;
