'use strict';
const {
  Model
} = require('sequelize');
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
  BodyIndexData.init({
    DBP: DataTypes.FLOAT,
    SBP: DataTypes.FLOAT,
    Glucose: DataTypes.FLOAT,
    SpO2: DataTypes.FLOAT,
    Temperature: DataTypes.FLOAT,
    TemperatureInF: DataTypes.FLOAT,
    timeMessure: DataTypes.DATE,
    health_status: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BodyIndexData',
  });
  return BodyIndexData;
};