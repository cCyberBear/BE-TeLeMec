"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Conversation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ UserConversation }) {
      this.hasMany(UserConversation, {
        foreignKey: "conversationId",
        as: "conversation",
      });
    }
  }
  Conversation.init(
    {
      lastestMessage: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Conversation",
    }
  );
  return Conversation;
};
