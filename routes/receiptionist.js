const express = require("express");
const router = express.Router();

const middleware = require("../middlewares/authentication");

const {
  login,
  loginForm,
  changePassword,
  changePasswordForm,
  update,
  updateForm,
  logout,
  dashboard,
} = require("../controllers/receiptionist");

router.get("/", loginForm);
router.get("/login", loginForm);
router.post("/login", login);
router.get("/dashboard", middleware.authentication, dashboard);
router.get("/changePassword", middleware.authentication, changePasswordForm);
router.post("/changePassword", middleware.authentication, changePassword);
router.get("/update", middleware.authentication, updateForm);
router.post("/update", middleware.authentication, update);
router.get("/logout", middleware.authentication, logout);

module.exports = router;
