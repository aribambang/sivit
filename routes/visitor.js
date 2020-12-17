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
} = require("../controllers/visitor");

router.get("/", middleware.authentication, list);
router.post("/create", middleware.authentication, create);
router.get("/create", middleware.authentication, createForm);
router.post("/update/:id_visitor", middleware.authentication, update);
router.get("/update/:id_visitor", middleware.authentication, updateForm);
router.get("/remove/:id_visitor", middleware.authentication, remove);

module.exports = router;
