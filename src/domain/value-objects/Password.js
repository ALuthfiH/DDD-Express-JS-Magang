const bcrypt = require("bcryptjs");

class Password {
  constructor(value) {
    this.value = value;
  }

  async hash() {
    const saltRounds = 10;
    return bcrypt.hash(this.value, saltRounds);
  }

  async verify(hashedPassword) {
    return bcrypt.compare(this.value, hashedPassword);
  }
}

module.exports = Password;
