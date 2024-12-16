const { validationResult, body } = require("express-validator");
const RegisterUser = require("../../../application/use-cases/registerUser");
const UserRepositoryImpl = require("../../../domain/repositories/UserRepositoryImpl");

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
}

module.exports = new UserController();
