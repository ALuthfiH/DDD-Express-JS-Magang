const { body } = require('express-validator');

const validationRegister = [
  body("name").notEmpty().withMessage("Nama tidak boleh kosong"),
  body("email").notEmpty().withMessage("Email tidak boleh kosong"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password minimal 6 karakter"),
];

const validationLogin = [
  body("email").notEmpty().withMessage("Email tidak boleh kosong"),
  body("password").notEmpty().withMessage("Password tidak boleh kosong"),
];

module.exports = { validationRegister, validationLogin };
