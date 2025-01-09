const CandidateRepository = require("./CandidateRepository");
const { Candidate: CandidateModel, sequelize, CadidateJob: CadidateJobModel, Job: JobModel, User: UserModel } = require("../../infrastructure/database/models");
const Candidate = require("../entities/candidate");


class CandidateRepositoryImpl extends CandidateRepository {
    async save(jobId, candidate) {
        const t = await sequelize.transaction();
        try {
            const candidateRecord = await CandidateModel.create(candidate, { transaction: t});
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

    async findAll() {
        try {
            const candidateRecords = await CandidateModel.findAll({
                include: [
                    {
                        model: UserModel, 
                        as: "user",
                        attributes: ["id", "name"]
                    },
                    {
                        model: JobModel,
                        as: "jobs",
                        attributes: ["id", "title"]
                    }
                ]
            })

            return candidateRecords;
        } catch (error) {
            console.log(error);
        }
    }

    async findOne(id) {
        try {
            const candidateRecord = await CandidateModel.findOne({
                where: { id },
                include: [
                    {
                        model: UserModel, 
                        as: "user",
                        attributes: ["id", "name"]
                    },
                    {
                        model: JobModel,
                        as: "jobs",
                        attributes: ["id", "title"]
                    }
                ]
            })

            return candidateRecord;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = CandidateRepositoryImpl;