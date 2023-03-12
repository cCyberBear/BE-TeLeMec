const catchAsync = require("../middlewares/async");
const { Message, UserConversation, User } = require("../models");
const ApiError = require("../utils/ApiError");

exports.getMessageByConversationId = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await Message.findAll({
    where: {
      conversationId: id,
    },
  });
  const rawUsers = await UserConversation.findAll({
    where: {
      conversationId: id,
    },
    include: [
      {
        model: User,
        as: "user",
        attributes: ["id", "fullName", "image"],
      },
    ],
  });
  const users = rawUsers.reduce((users, item) => {
    const { user } = item.dataValues;
    const existingUser = users.find((u) => u.id === user.id);
    if (!existingUser) {
      users.push(user);
    }
    return users;
  }, []);

  res.json({
    success: true,
    data,
    users,
  });
});
