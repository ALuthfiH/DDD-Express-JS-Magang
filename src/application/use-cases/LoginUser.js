const User = require("../../domain/entities/User");
const { Password } = require("../../domain/value-objects");
const { UserDTO } = require("../dtos");

class LoginUser {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async execute(userData) {
    const userDomainData = UserDTO.fromLoginDTO(userData);

    const user = await this.userRepository.findByEmail(userDomainData.email);

    const password = new Password(userDomainData.password);
    const verifyPassword = await password.verify(user.password);
    if (!verifyPassword) throw new Error("Password salah.");

    return UserDTO.toLoginDTO(user);
  }
}

module.exports = LoginUser;
