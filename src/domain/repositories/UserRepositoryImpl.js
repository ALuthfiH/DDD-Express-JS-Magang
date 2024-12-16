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
            password: userRecord.password
         });
    }

    async findByEmail(email) {
        const userRecord = await UserModel.findOne({ email });
        return new User({ 
            id: userRecord.id,
            name: userRecord.name,
            email: userRecord.email,
            password: userRecord.password
         });
    }
}

module.exports = UserRepositoryImpl;