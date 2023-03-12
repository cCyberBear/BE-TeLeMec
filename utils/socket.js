const { UserConversation, Message, Conversation } = require("../models");
const _ = require("lodash");
exports.socketChat = (io) => {
  io.on("connection", (socket) => {
    const id = socket.handshake.query.userId;

    socket.on("joinRoom", async () => {
      console.log("🚀 ~ socket.on ~ data:");
      const conversationRaw = await UserConversation.findAll({
        where: {
          userId: id,
        },
      });
      const arrayConversationId = _.map(conversationRaw, (item) =>
        String(item.dataValues.conversationId)
      );
      socket.join(arrayConversationId);
      console.log(
        `User with ID: ${id} joined room: ${arrayConversationId.toString()}`
      );
    });

    socket.on("disconnect", () => {
      console.log("Disconnected: " + id);
    });

    // socket.on("leaveRoom", ({ chatroomId }) => {
    //   socket.leave(chatroomId);
    //   console.log("A user left chatroom: " + chatroomId);
    // });

    socket.on("sendMessage", async (data) => {
      await Message.create(data);
      await Conversation.update(
        {
          lastestMessage: data.content,
        },
        {
          where: {
            id: data.conversationId,
          },
        }
      );
      socket.to(String(data.conversationId)).emit("receiveMessage", data);
    });
  });
};
