const express = require("express");
const { jwtAuth } = require("../middlewares/jwtAuth");
const { createBodyIndexData } = require("../controllers/indexhuman.controller");

const router = express.Router();

router.post("/", jwtAuth, createBodyIndexData);

module.exports = { router };
