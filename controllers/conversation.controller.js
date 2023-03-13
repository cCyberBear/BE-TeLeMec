const catchAsync = require("../middlewares/async");
const { UserConversation, Conversation, User } = require("../models");
const ApiError = require("../utils/ApiError");
const _ = require("lodash");
const { Op } = require("sequelize");

exports.createConversaion = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const { friendId } = req.body;
  if (userId === friendId) throw new ApiError(500, "Wrong");
  const checkFraw = await UserConversation.findAll({ where: { userId } });
  const checkSraw = await UserConversation.findAll({
    where: { userId: friendId },
  });
  const groupedF = _.map(checkFraw, (item) => item.dataValues.conversationId);
  const groupedS = _.map(checkSraw, (item) => item.dataValues.conversationId);

  const hasCommonConversation = groupedF.some((item) =>
    groupedS.includes(item)
  );

  if (hasCommonConversation) {
    throw new ApiError(500, "Duplication conversastion !");
  }

  const newConversation = await Conversation.create({
    lastestMessage: "Click to chat !!!",
  });

  await UserConversation.bulkCreate(
    [
      {
        conversationId: newConversation.dataValues.id,
        userId: friendId,
      },
      {
        conversationId: newConversation.dataValues.id,
        userId,
      },
    ],
    {
      returning: true,
    }
  );

  res.json({
    success: true,
  });
});
exports.getAllConversation = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const data = await UserConversation.findAll({
    where: {
      userId,
    },
    attributes: ["conversationId"],
    include: [
      {
        model: Conversation,
        as: "conversation",
        attributes: ["id", "lastestMessage", "updatedAt", "id"],
        include: [
          {
            model: UserConversation,
            as: "conversation",
            attributes: ["conversationId"],
            include: [
              {
                model: User,
                as: "user",
                attributes: ["id", "fullName", "image"],
              },
            ],
          },
        ],
      },
    ],
    order: [["conversation", "updatedAt", "DESC"]],
  });
  function convertArray(a) {
    const result = [];
    for (const conversation of a) {
      const users = conversation.conversation.dataValues.conversation.map(
        (item) => ({
          id: item.user.id,
          fullName: item.user.fullName,
          image: item.user.image,
        })
      );
      result.push({
        id: conversation.conversation.id,
        lastestMessage: conversation.conversation.lastestMessage,
        updatedAt: conversation.conversation.updatedAt,
        conversation: users,
      });
    }
    return result;
  }

  res.json(convertArray(data));
});
exports.getAllUserNotAdd = catchAsync(async (req, res) => {
  const userId = req.user.id;

  const conversationRaw = await UserConversation.findAll({
    where: {
      userId,
    },
  });
  const arrayConversationId = _.map(
    conversationRaw,
    (item) => item.dataValues.conversationId
  );
  console.log(
    "🚀 ~ exports.getAllUserNotAdd=catchAsync ~ arrayConversationId:",
    arrayConversationId
  );

  const data = await User.findAll({
    attributes: ["id", "fullName", "email"],
    require: false,
    include: [
      {
        model: UserConversation,
        as: "user",
      },
    ],
  });

  res.json(data);
});
