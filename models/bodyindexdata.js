"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BodyIndexData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BodyIndexData.init(
    {
      DBP: DataTypes.FLOAT,
      SBP: DataTypes.FLOAT,
      Glucose: DataTypes.FLOAT,
      SpO2: DataTypes.FLOAT,
      Temperature: DataTypes.FLOAT,
      TemperatureInF: DataTypes.FLOAT,
      timeMessure: DataTypes.DATE,
      heart_rate: DataTypes.INTEGER,
      health_status1: DataTypes.INTEGER,
      health_status2: DataTypes.INTEGER,
      health_status3: DataTypes.INTEGER,
      health_status4: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "BodyIndexData",
    }
  );
  return BodyIndexData;
};
