const express = require("express");
const router = express.Router();

const {
  list,
  create,
  createForm,
  update,
  updateForm,
  remove,
} = require("../controllers/company");

router.get("/", list);
router.post("/create", create);
router.get("/create", createForm);
router.post("/update/:id_company", update);
router.get("/update", updateForm);
router.post("/remove/:id_company", remove);

module.exports = router;
