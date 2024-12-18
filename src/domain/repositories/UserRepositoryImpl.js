const UserRepository = require("./userRepository");
const { User: UserModel } = require("../../infrastructure/database/models");
const User = require("../entities/User");

class UserRepositoryImpl extends UserRepository {
  async save(user) {
    const userRecord = await UserModel.create(user);
    return new User({
      id: userRecord.id,
      name: userRecord.name,
      email: userRecord.email,
      password: userRecord.password,
    });
  }

  async findByEmail(email) {
    const userRecord = await UserModel.findOne({ where: { email } });
    if (!userRecord) throw new Error("Email belum terdaftar.");

    return new User({
      id: userRecord.id,
      name: userRecord.name,
      email: userRecord.email,
      password: userRecord.password,
      isAdmin: userRecord.isAdmin,
    });
  }
}

module.exports = UserRepositoryImpl;
