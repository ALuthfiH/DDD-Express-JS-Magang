const { validationResult, body } = require("express-validator");
const RegisterUser = require("../../../application/use-cases/registerUser");
const LoginUser = require("../../../application/use-cases/LoginUser");
const UserRepositoryImpl = require("../../../domain/repositories/UserRepositoryImpl");
const { isAdmin } = require("../middlewares/auth");

const userRepository = new UserRepositoryImpl();

class UserController {
  registerPage(req, res, next) {
    res.render("register");
  }

  async register(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.render("register", { errors: errors.array() });
      }

      const userData = req.body;
      const registerUser = new RegisterUser({ userRepository });
      const user = await registerUser.execute(userData);
      res.redirect("/login");
    } catch (error) {
      console.log(error);
    }
  }

  loginPage(req, res, next) {
    res.render("login");
  }

  async login(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.render("login", { errors: errors.array() });
      }

      const userData = req.body;
      const loginUser = new LoginUser({ userRepository });
      const user = await loginUser.execute(userData);

      req.session.user = {
        id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      };

      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserController();
