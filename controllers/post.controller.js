const catchAsync = require("../middlewares/async");
const { Post, User } = require("../models");
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
  // const { category } = req.query;
  const data = await Post.findAll({
    // where: {
    //   category,
    // },
  });
  res.json(data);
});

exports.getPostDetail = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await Post.findByPk(id, {
    include: [
      { model: User, as: "user", attributes: ["id", "firstName", "lastName"] },
    ],
  });
  if (!data) throw new ApiError(404, "Not found");
  res.json(data);
});
