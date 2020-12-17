const { Visitor } = require("../models");

exports.list = (req, res) => {
    Visitor.findAll({order:  [["id","ASC"]]})
  .then(data=>{
   res.render('visitor/list', {data:data})
 })
  .catch(err=>{
   res.send(err)
 })
};

exports.create = (req, res) => {
    Visitor.create(req.body)
    .then(data=>{
      res.redirect('/visitors')
    })
    .catch(err =>{
      res.send(err.stack)
    })
};

exports.createForm = (req, res) => {
    res.render('visitor/add')
  };
exports.update = (req, res) => {
    Visitor.update(req.body,{where: {id: req.params.id_visitor}})
    .then(data =>{
      res.redirect('/visitors')
    })
    .catch(err =>{
      // res.send(err.errors[0].message)
      res.send(err.errors[0].message)
      // res.send(err)
    })
};

exports.updateForm = (req, res) => {
    Visitor.findOne({where : {id: req.params.id_visitor}})
    .then(data =>{
      res.render('visitor/edit', { data:data, id:req.params.id_visitor})
    })
    .catch(err =>{
      res.send(err)
    })
}

exports.remove = (req, res) => {
    Visitor.destroy({where : {id: req.params.id_visitor}})
    .then(data =>{
      res.redirect('/visitors')
    })
    .catch(err =>{
      res.send(err)
    })
}