class CountUser {
    constructor({ userRepository }) {
        this.userRepository = userRepository;
    }

    async execute() {
        return this.userRepository.count();
    }
}

module.exports = CountUser;