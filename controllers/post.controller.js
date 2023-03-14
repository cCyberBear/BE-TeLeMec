const catchAsync = require("../middlewares/async");
const { Post } = require("../models");
const ApiError = require("../utils/ApiError");

exports.createPost = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const { title, category, image, content } = req.body;
  const data = await Post.create({
    userId,
    title,
    category,
    image,
    content,
  });
  res.json({
    success: true,
    data,
  });
});

exports.getPostByCategory = catchAsync(async (req, res) => {
  const { category } = req.query;
  const data = await Post.findAll({
    where: {
      category,
    },
  });
  res.json(data);
});
