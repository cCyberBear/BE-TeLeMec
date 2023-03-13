const express = require("express");
const {
  createConversaion,
  getAllConversation,
  getAllUserNotAdd,
} = require("../controllers/conversation.controller");
const { jwtAuth } = require("../middlewares/jwtAuth");

const router = express.Router();

router.post("/", jwtAuth, createConversaion);
router.get("/", jwtAuth, getAllConversation);
router.get("/add", jwtAuth, getAllUserNotAdd);

module.exports = { router };
