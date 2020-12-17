const { Receptionist } = require("../models");

exports.login = (req, res) => {
  Receptionist.findOne({
    where: { username: req.body.username, password: req.body.password },
  })
    .then((data) => {
      req.session.isAuth = true;
      req.session.name = data.name;
      req.session.email = data.email;
      req.session.userId = data.id;
      res.redirect("/dashboard");
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.loginForm = (req, res) => {
  res.render("receptionist/login");
};

exports.changePassword = (req, res) => {
  let userId = req.session.userId;
  let passlama = req.body.password;
  let passbaru = req.body.newpassword;
  let passconfirm = req.body.confirmpassword;
  if (passbaru === passconfirm) {
    Receptionist.findOne({ where: { id: userId } })
      .then((data) => {
        return Receptionist.update(
          { password: passbaru },
          { where: { id: userId } }
        );
      })
      .then((data2) => {
        res.redirect("/dashboard");
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    res.send("new password and confrim password not match");
  }
};

exports.changePasswordForm = (req, res) => {
  res.render("receptionist/changePasswordForm", { session: req.session });
};

exports.updateForm = (req, res) => {};

exports.update = (req, res) => {};

exports.logout = (req, res) => {
  delete req.session.isAuth;
  delete req.session.name;
  delete req.session.email;
  res.redirect("/login");
};

exports.dashboard = (req, res) => {
  res.render("receptionist/dashboard", { session: req.session });
};
