const express = require("express");
const { jwtAuth } = require("../middlewares/jwtAuth");

const {
  getMessageByConversationId,
} = require("../controllers/message.controller");

const router = express.Router();

router.get("/:id", getMessageByConversationId);

module.exports = { router };
