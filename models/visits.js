'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class visits extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  visits.init({
    VisitorId: DataTypes.INTEGER,
    CompanyId: DataTypes.INTEGER,
    ReceptionistId: DataTypes.INTEGER,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    purpose: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'visits',
  });
  return visits;
};