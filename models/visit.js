"use strict";
const { Model } = require("sequelize");
const { options } = require("../routes/company");
module.exports = (sequelize, DataTypes) => {
  class Visit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Visit.belongsTo(models.Company);
      Visit.belongsTo(models.Visitor);
      Visit.belongsTo(models.Receptionist);
    }
  }
  Visit.init(
    {
      VisitorId: {
        type: DataTypes.INTEGER,
        references: { model: { tableName: "Vistors" }, key: "id" },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      CompanyId: {
        type: DataTypes.INTEGER,
        references: { model: { tableName: "Companies" }, key: "id" },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      ReceptionistId: {
        type: DataTypes.INTEGER,
        references: { model: { tableName: "Receptionists" }, key: "id" },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      start: DataTypes.DATE,
      end: { type: DataTypes.DATE, allowNull: true },
      purpose: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Visit",
      hooks: {
        beforeCreate: (visit, options) => {
          visit.start = new Date();
        },
      },
    }
  );
  return Visit;
};
