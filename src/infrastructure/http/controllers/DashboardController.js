const CountJob = require("../../../application/use-cases/job/CountJob");
const CountUser = require("../../../application/use-cases/users/CountUser");
const JobRepositoryImpl = require("../../../domain/repositories/JobRepositoryImpl");
const UserRepositoryImpl = require("../../../domain/repositories/UserRepositoryImpl");

const userRepository = new UserRepositoryImpl();
const jobRepository = new JobRepositoryImpl();

class DashboardController {
    async index(req, res, next) {
        const countUser = new CountUser({ userRepository });
        const countUserResult = await countUser.execute();

        const countJob = new CountJob({ jobRepository });
        const countJobResult = await countJob.execute();

        res.render("layout", { 
            title: "Dashboard",
            view: "index",
            user: req.session.user,
            count: {
                users: countUserResult,
                jobs: countJobResult
            }
        });
    }
}

module.exports = new DashboardController();