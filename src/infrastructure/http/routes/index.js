var express = require("express");
var router = express.Router();
const { userRegister, userLogin, userRegisterCreate, userLoginCreate } = require("../controllers/authController");
const { validationLogin, validationRegister } = require("../middlewares/validation");
const { isAuthenticated } = require("../middlewares/auth");
const UserController = require("../controllers/UserController");
const dashboardController = require("../controllers/dashboardController");

/* GET home page. */
router.get("/", isAuthenticated, dashboardController.index);

/* Register*/
router.get("/register", UserController.registerPage);
router.post("/register", validationRegister, UserController.register);

// Login
router.get("/login", UserController.loginPage);
router.post("/login", validationLogin, UserController.login);

//logout
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

// job

module.exports = router;
