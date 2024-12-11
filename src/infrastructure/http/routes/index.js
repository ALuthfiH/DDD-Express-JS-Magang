var express = require("express");
var router = express.Router();
const { userRegister, userLogin, userRegisterCreate } = require("../controllers/authController");
const { validationLogin, validationRegister } = require("../middlewares/validation");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/register", userRegister);
router.post("/register", validationRegister, userRegisterCreate);
router.get("/login", validationLogin, userLogin);

module.exports = router;
