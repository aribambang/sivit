"use strict";

const receptionist = [
  {
    name: "Admin",
    username: "admin",
    password: "admin",
    email: "sivitdev@gmail.com",
  },
];

receptionist.forEach((v) => {
  v.createdAt = new Date();
  v.updatedAt = new Date();
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Receptionists", receptionist, {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("receptionists", null, {});
  },
};
