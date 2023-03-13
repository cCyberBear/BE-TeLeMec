const catchAsync = require("../middlewares/async");
const { UserConversation, Conversation, User } = require("../models");
const ApiError = require("../utils/ApiError");
const _ = require("lodash");
const { Op } = require("sequelize");

exports.createConversaion = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const { friendId } = req.body;
  console.log(
    "🚀 ~ file: conversation.controller.js:10 ~ exports.createConversaion=catchAsync ~ friendId:",
    userId
  );
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

  const me = await User.findByPk(userId);
  const fr = await User.findByPk(friendId);
  await newConversation.addUser(me);
  await newConversation.addUser(fr);

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
  const { string } = req.query;
  const conversations = await User.findByPk(userId, {
    attributes: ["id"],
    include: [
      {
        attributes: ["id"],
        model: Conversation,
        through: { attributes: [] },
        include: [
          {
            attributes: ["id"],
            model: User,
            through: { attributes: [] },
          },
        ],
      },
    ],
  });
  const userIds = conversations
    .toJSON()
    .Conversations.flatMap((conversation) => conversation.Users)
    .map((user) => user.id)
    .filter((id) => id !== userId);

  const users = await User.findAll({
    where: {
      id: { [Op.not]: userId },
      [Op.not]: { id: userIds },
      [Op.or]: [
        {
          fullName: {
            [Op.like]: string !== "" ? `%${string}%` : "%%",
          },
        },
        {
          email: {
            [Op.like]: string !== "" ? `%${string}%` : "%%",
          },
        },
      ],
    },
  });

  res.json(users);
});
