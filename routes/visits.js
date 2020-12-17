const express = require("express");
const router = express.Router();

const {
  list,
  create,
  createForm,
  update,
  updateForm,
  remove,
  checkout,
} = require("../controllers/visits");

router.get("/", list);
router.post("/create", create);
router.get("/create", createForm);
router.post("/update/:id_visitor", update);
router.get("/update", updateForm);
router.post("/remove/:id_visitor", remove);
router.post("/checkout/:id_visitor", checkout);

module.exports = router;
