"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Receptionist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Receptionist.belongsToMany(models.Visitor, {
      //   through: models.Visit,
      //   foreignKey: "ReceptionistId",
      // });
      // Receptionist.belongsToMany(models.Company, {
      //   through: models.Visit,
      //   foreignKey: "ReceptionistId",
      // });
    }
  }
  Receptionist.init(
    {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Receptionist",
    }
  );
  return Receptionist;
};
