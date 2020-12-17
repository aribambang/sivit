const { Company } = require("../models/index");

exports.list = (req, res) => {
  Company.findAll({ order: [["id", "ASC"]] })
    .then((data) => {
      res.render("company/list", { data: data, session: req.session });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.create = (req, res) => {
  Company.create(req.body)
    .then((data) => {
      res.redirect("/companies");
    })
    .catch((err) => {
      res.send(err.stack);
    });
};

exports.createForm = (req, res) => {
  res.render("company/add", { session: req.session });
};

exports.update = (req, res) => {
  Company.update(req.body, { where: { id: req.params.id_company } })
    .then((data) => {
      res.redirect("/companies");
    })
    .catch((err) => {
      res.send(err.errors[0].message);
    });
};

exports.updateForm = (req, res) => {
  Company.findOne({ where: { id: req.params.id_company } })
    .then((data) => {
      res.render("company/edit", {
        data: data,
        id: req.params.id_company,
        session: req.session,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.remove = (req, res) => {
  Company.destroy({ where: { id: req.params.id_company } })
    .then((data) => {
      res.redirect("/companies");
    })
    .catch((err) => {
      res.send(err);
    });
};
