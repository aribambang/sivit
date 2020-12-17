'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visitor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Visitor.init({
    name: {type: DataTypes.STRING,validate: {
      notEmpty:{args:true, msg:"name is required"}
    }},
    phone_number:{type: DataTypes.STRING,validate: {
      notEmpty:{args:true, msg:"Phone number is required"}
    }},
    email: {type: DataTypes.STRING,validate: {
      notEmpty:{args:true, msg:"Email is required"}
    }},
    address: {type: DataTypes.STRING,validate: {
      notEmpty:{args:true, msg:"Address is required"}
    }},
  }, {
    sequelize,
    modelName: 'Visitor',
  });
  return Visitor;
}; 