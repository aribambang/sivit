'use strict';

const { query } = require("express");

const companies = [
  {
    name: "Foodizz",
    phone_number: '0856987456',
    address : 'Lantai 2. ruangan 2-4'
  },
  {
    name: "IndoGamers",
    phone_number: '0877562357',
    address : 'Lantai 2. ruangan 4-7'
  }
]
companies.forEach(c =>{
  c.createdAt = new Date()
  c.updatedAt = new Date()
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Companies',companies,{})
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Companies',null,{})
  }
};
