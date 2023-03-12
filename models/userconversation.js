"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserConversation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Conversation, User }) {
      this.belongsTo(Conversation, {
        foreignKey: "conversationId",
        as: "conversation",
      });
      this.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }
  UserConversation.init(
    {
      userId: DataTypes.INTEGER,
      conversationId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserConversation",
    }
  );
  return UserConversation;
};
