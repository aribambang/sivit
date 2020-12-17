const nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sivitdev@gmail.com",
    pass: "Sivit123!!",
  },
});
