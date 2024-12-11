const bcrypt = require("bcryptjs");
const { validationResult, body } = require("express-validator");
const { User } = require("../../database/models");

const userRegister = (req, res, next) => {
  res.render("register");
};

const userRegisterCreate = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.render("register", { errors: errors.array() });
    }
    
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });
    
    res.redirect("/login");
  } catch (error) {
    console.log(error);
  }
};

const userLogin = (req, res, next) => {
  res.render("login");
};

module.exports = { userRegister, userLogin, userRegisterCreate };
