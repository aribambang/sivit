"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Visits", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      VisitorId: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: "Visitors" }, key: "id" },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      CompanyId: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: "Companies" }, key: "id" },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      ReceptionistId: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: "Receptionists" }, key: "id" },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      start: {
        type: Sequelize.DATE,
      },
      end: {
        type: Sequelize.DATE,
      },
      purpose: {
        type: Sequelize.STRING,
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Visits");
  },
};
