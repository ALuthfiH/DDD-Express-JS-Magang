const FindAllCandidate = require("../../../application/use-cases/candidate/FindAllCandidate");
const FindOneCandidate = require("../../../application/use-cases/candidate/FindOneCandidate");
const CandidateRepositoryImpl = require("../../../domain/repositories/CandidateRepositoryImpl");

const candidateRepository = new CandidateRepositoryImpl();

class CandidateController {
    async index(req, res, next) {
        try {
            const findAllCandidate = new FindAllCandidate({ candidateRepository });
            const candidates = await findAllCandidate.execute();
            res.render("layout", {
                candidates,
                dataTables: {
                    status: true,
                    name: "#candidates"
                },
                title: "Data Pendaftar",
                view: "candidates/index",
                user: req.session.user
            })
        } catch (error) {
            console.log(error);
        }
    }

    async show(req, res, next) {
        try {
            const id = req.params.id;
            const findOneCandidate = new FindOneCandidate({ candidateRepository });
            const candidate = await findOneCandidate.execute(id);
            res.render("layout", {
                candidate,
                title: "Detail Data Kandidat",
                view: "candidates/show",
                user: req.session.user
            })
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new CandidateController();