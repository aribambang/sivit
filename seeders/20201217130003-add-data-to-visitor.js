'use strict';
const visitors = [
  {
    name: "andi jokota",
    phone_number: '0856998523',
    address : 'jalan.bojongloa no.8',
    email: "andi.joko@gmail.com"
  },
  {
    name: "anda jayadi",
    phone_number: '08777448965',
    address : 'jalan bojong kidul no.13',
    email : 'anda.jaya@gmail.com'
  }
]

visitors.forEach(v =>{
  v.createdAt = new Date()
  v.updatedAt = new Date()

})

module.exports = {
  up:  (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert("Visitors",visitors,{})
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Visitors",null,{})
  }
};
