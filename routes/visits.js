const express = require("express");
const router = express.Router();

const middleware = require("../middlewares/authentication");
const {
  list,
  create,
  createForm,
  update,
  updateForm,
  remove,
  checkout,
  report,
} = require("../controllers/visits");

router.get("/", middleware.authentication, list);
router.post("/create", middleware.authentication, create);
router.get("/create", middleware.authentication, createForm);
router.post("/update/:id_visits", middleware.authentication, update);
router.get("/update/:id_visits", middleware.authentication, updateForm);
router.get("/remove/:id_visits", middleware.authentication, remove);
router.get("/checkout/:id_visits", middleware.authentication, checkout);
router.get("/report", middleware.authentication, report);

module.exports = router;
