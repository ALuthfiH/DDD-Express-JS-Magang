const Job = require("../entities/Job");
const JobRepository = require("./JobRepository");
const { Job: JobModel } = require("../../infrastructure/database/models");

class JobRepositoryImpl extends JobRepository {
  async save(job) {
    const jobRecord = await JobModel.create(job);
    return new Job(jobRecord);
  }

  async findAll() {
    const jobRecords = await JobModel.findAll();
    return jobRecords.map((job) => new Job(job));
  }

  async findById(id) {
    const jobRecord = await JobModel.findOne({ where: { id } });
    if (!jobRecord) throw new Error("Id tidak ditemukan.");
    return new Job(jobRecord);
  }

  async updateById(id, job) {
    await JobModel.update(job, { where: { id }});
    const jobRecord = await JobModel.findOne({ where: { id } });
    return new Job(jobRecord);
  }

  async deleteById(id) {
    const jobRecord = await JobModel.destroy({ where: { id }});
    return new Job(jobRecord);
  }

    async count() {
      return await JobModel.count();
    }
}

module.exports = JobRepositoryImpl;
