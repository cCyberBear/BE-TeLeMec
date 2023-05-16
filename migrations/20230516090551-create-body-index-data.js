"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("BodyIndexData", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      DBP: {
        type: Sequelize.FLOAT,
      },
      SBP: {
        type: Sequelize.FLOAT,
      },
      Glucose: {
        type: Sequelize.FLOAT,
      },
      SpO2: {
        type: Sequelize.FLOAT,
      },
      Temperature: {
        type: Sequelize.FLOAT,
      },
      TemperatureInF: {
        type: Sequelize.FLOAT,
      },
      timeMessure: {
        type: Sequelize.DATE,
      },
      health_status: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("BodyIndexData");
  },
};
