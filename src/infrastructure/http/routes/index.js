var express = require("express");
var router = express.Router();
const { userRegister, userLogin, userRegisterCreate, userLoginCreate } = require("../controllers/authController");
const { validationLogin, validationRegister } = require("../middlewares/validation");
const { isAuthenticated } = require("../middlewares/auth");

/* GET home page. */
router.get("/", isAuthenticated, function (req, res, next) {
  res.render("index");
});

/* Register*/
router.get("/register", userRegister);
router.post("/register", validationRegister, userRegisterCreate);

// Login
router.get("/login", userLogin);
router.post("/login", validationLogin, userLoginCreate);

module.exports = router;
