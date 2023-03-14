const express = require("express");
const { jwtAuth } = require("../middlewares/jwtAuth");
const {
  createPost,
  getPostByCategory,
} = require("../controllers/post.controller");

const router = express.Router();

router.post("/", jwtAuth, createPost);
router.get("/", getPostByCategory);

module.exports = { router };
