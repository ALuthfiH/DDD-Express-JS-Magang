const { UserDTO } = require("../dtos");
const { Password } = require("../../domain/value-objects");

class RegisterUser {
    constructor({ userRepository }) {
        this.userRepository = userRepository;
    }

    async execute(userData) {
        const userDomainData = UserDTO.fromDTO(userData);

        // Set Password
        const password = new Password(userDomainData.password);
        const hashedPassword = await password.hash();
        userDomainData.password = hashedPassword;

        // userRepository
        const user = await this.userRepository.save(userDomainData);

        return UserDTO.toDTO(user);
    }
}

module.exports = RegisterUser;