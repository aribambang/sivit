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
} = require("../controllers/company");

router.get("/", middleware.authentication, list); //done
router.post("/create", middleware.authentication, create); //done
router.get("/create", middleware.authentication, createForm); //done
router.post("/update/:id_company", middleware.authentication, update);
router.get("/update/:id_company", middleware.authentication, updateForm);
router.get("/remove/:id_company", middleware.authentication, remove);

module.exports = router;
