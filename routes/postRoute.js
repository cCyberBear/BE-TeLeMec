const express = require("express");
const { jwtAuth } = require("../middlewares/jwtAuth");
const {
  createPost,
  getPostByCategory,
  getPostDetail,
} = require("../controllers/post.controller");

const router = express.Router();

router.post("/", jwtAuth, createPost);
router.get("/", getPostByCategory);
router.get("/:id", getPostDetail);

module.exports = { router };
