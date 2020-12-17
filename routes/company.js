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

router.get("/", list);//done
router.post("/create", create);//done
router.get("/create", createForm);//done
router.post("/update/:id_company", update);
router.get("/update/:id_company", updateForm);
router.get("/remove/:id_company", remove);

module.exports = router;
