"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.belongsToMany(models.Visitor, {
        through: "Visits",
        foreignkey: "CompanyId",
      });
    }
  }
  Company.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { args: true, msg: "name is required" },
        },
      },
      phone_number: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { args: true, msg: "Phone number is required" },
        },
      },
      address: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { args: true, msg: "Address is required" },
        },
      },
    },
    {
      sequelize,
      modelName: "Company",
    }
  );
  return Company;
};
