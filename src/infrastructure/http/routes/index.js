var express = require("express");
var router = express.Router();
const { userRegister, userLogin, userRegisterCreate, userLoginCreate } = require("../controllers/authController");
const { validationLogin, validationRegister } = require("../middlewares/validation");
const { isAuthenticated } = require("../middlewares/auth");
const UserController = require("../controllers/UserController");

/* GET home page. */
router.get("/", isAuthenticated, function (req, res, next) {
  res.render("index");
});

/* Register*/
router.get("/register", UserController.registerPage);
router.post("/register", validationRegister, UserController.register);

// Login
router.get("/login", userLogin);
router.post("/login", validationLogin, userLoginCreate);

module.exports = router;
