const express = require("express");
const router = express.Router();

const {
  login,
  loginForm,
  changePassword,
  changePasswordForm,
  update,
  updateForm,
} = require("../controllers/receiptionist");

router.get("/", loginForm);
router.get("/login", loginForm);
router.post("/login", login);
router.get("/changePassword", changePasswordForm);
router.post("/changePassword", changePassword);
router.get("/update", updateForm);
router.post("/update", update);

module.exports = router;
