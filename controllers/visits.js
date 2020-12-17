const { Visit, Company, Visitor, Receptionist } = require("../models");
const moment = require("moment");
const helper = require("../helpers/sendEmail");
const Chart = require("chart.js");
const { Sequelize, Op } = require("sequelize");

exports.list = (req, res) => {
  Visit.findAll({
    order: [["id", "ASC"]],
    where: { end: null },
    include: [Company, Visitor, Receptionist],
  })
    .then((data) => {
      res.render("visits/list", { data: data, moment, session: req.session });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.create = (req, res) => {
  req.body.ReceptionistId = req.session.userId;
  Visit.findOne({ where: { VisitorId: req.body.VisitorId, end: null } })
    .then((data) => {
      if (data === null) {
        return Visit.create(req.body);
      } else {
        return Promise.reject("Visitor on Building");
      }
    })
    .then((data1) => {
      res.redirect("/visits");
    })
    .catch((err) => {
      res.send(
        `<script>alert("${err}"); window.location.href = "/visits/create"; </script>`
      );
    });
};

exports.createForm = (req, res) => {
  let visitors = [];
  let companies = [];
  Visitor.findAll()
    .then((data) => {
      visitors = data;
      return Company.findAll();
    })
    .then((data2) => {
      companies = data2;
      res.render("visits/add", { visitors, companies, session: req.session });
    })
    .catch((err) => {});
};

exports.update = (req, res) => {};

exports.updateForm = (req, res) => {};

exports.remove = (req, res) => {
  Visit.destroy({ where: { id: req.params.id_visits } })
    .then((data) => {
      res.redirect("/visits");
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.checkout = (req, res) => {
  Visit.update({ end: new Date() }, { where: { id: req.params.id_visits } })
    .then((data) => {
      return Visit.findOne({
        where: { id: req.params.id_visits },
        include: [Visitor],
      });
    })
    .then((data2) => {
      const now = data2.end;
      const then = data2.start;

      let output = moment
        .utc(
          moment(now, "DD/MM/YYYY HH:mm:ss").diff(
            moment(then, "DD/MM/YYYY HH:mm:ss")
          )
        )
        .format("HH:mm:ss");

      helper.transporter.sendMail(
        {
          from: "sivitdev@gmail.com",
          to: data2.Visitor.email,
          subject: "Thank you for visit",
          text: `your time in the building ${output}`,
        },
        function (error, info) {
          if (error) {
            return Promise.reject("Failed send");
          } else {
            console.log("Email sent: " + info.response);
            res.redirect("/visits");
          }
        }
      );
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.report = (req, res) => {
  Company.findAll({
    include: [Visitor],
  })
    .then((data) => {
      const label = [];
      const isi = [];
      data.map((i) => {
        label.push(i.name);
        isi.push(i.Visitors.length);
      });
      console.log(label, isi);
      res.render("visits/report", { session: req.session, Chart, label, isi });
    })
    .catch((err) => {
      res.send(err);
    });
};
