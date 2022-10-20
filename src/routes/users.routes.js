const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");
const { verifyToken } = require("../services/auth.service");

router.get("/", verifyToken, usersController.get);

router.post("/", usersController.create);

module.exports = router;
