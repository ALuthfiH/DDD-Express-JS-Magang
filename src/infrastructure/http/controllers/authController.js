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
      password: hashedPassword,
    });

    res.redirect("/login");
  } catch (error) {
    console.log(error);
  }
};

const userLogin = (req, res, next) => {
  res.render("login");
};

const userLoginCreate = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("login", { errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.render("login", {
        errors: [{ msg: "Email belum terdaftar", path: "email" }],
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.render("login", {
        errors: [{ msg: "Password salah", path: "password" }],
      });
    }

    req.session.user = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { userRegister, userLogin, userRegisterCreate, userLoginCreate };
