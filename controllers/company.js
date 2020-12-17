const { Company } = require('../models/index')

exports.list = (req, res) => {
 Company.findAll()
  .then(data=>{
   res.render('company/list', {data:data})
 })
  .catch(err=>{
   res.send(err)
 })
};

exports.create = (req, res) => {};

exports.createForm = (req, res) => {};

exports.update = (req, res) => {};

exports.updateForm = (req, res) => {};

exports.remove = (req, res) => {};
