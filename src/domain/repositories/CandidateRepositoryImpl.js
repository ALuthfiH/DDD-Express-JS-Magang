const CandidateRepository = require("./CandidateRepository");
const { Candidate: CandidateModel, sequelize, CadidateJob: CadidateJobModel } = require("../../infrastructure/database/models");
const Candidate = require("../entities/candidate");


class CandidateRepositoryImpl extends CandidateRepository {
    async save(jobId, candidate) {
        const t = await sequelize.transaction();
        try {
            const candidateRecord = await CandidateModel.create(candidate, { transaction: t});
            console.log(candidateRecord);
            const candidateJobRecord = await  CadidateJobModel.create({ 
                jobId,
                candidateId: candidateRecord.id,
            }, { transaction: t});
            await t.commit();
            return new Candidate(candidateRecord);
        } catch (error) {
            await t.rollback();
            console.log(error);
        }

    }
}

module.exports = CandidateRepositoryImpl;