const { JobDTO } = require("../../dtos");

class FindOneJob {
    constructor({ jobRepository }) {
        this.jobRepository = jobRepository;
    }

    async execute(jobId) {
        const jobDomainData = JobDTO.fromFindDTO(jobId);
        const job = await this.jobRepository.findById(jobDomainData.id);

        return JobDTO.toDTO(job);
    }
}

module.exports = FindOneJob;