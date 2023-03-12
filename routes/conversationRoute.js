const express = require("express");
const {
  createConversaion,
  getAllConversation,
} = require("../controllers/conversation.controller");
const { jwtAuth } = require("../middlewares/jwtAuth");

const router = express.Router();

router.post("/", jwtAuth, createConversaion);
router.get("/", jwtAuth, getAllConversation);

module.exports = { router };
