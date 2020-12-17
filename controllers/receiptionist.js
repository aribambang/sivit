const { render } = require("ejs");
const { Receiptionist } = require("../models");

exports.login = (req, res) => {};

exports.loginForm = (req, res) => {
  res.render("receiptionist/login");
};

exports.changePassword = (req, res) => {};

exports.changePasswordForm = (req, res) => {};

exports.updateForm = (req, res) => {};

exports.update = (req, res) => {};
