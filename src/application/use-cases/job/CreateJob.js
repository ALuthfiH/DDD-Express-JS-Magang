const { JobDTO } = require("../../dtos");

class CreateJob {
    constructor({ jobRepository }) {
        this.jobRepository = jobRepository;
    }

    async execute(jobData) {
        const jobDomainData = JobDTO.fromDTO(jobData);
        const job = await this.jobRepository.save(jobDomainData);
        return JobDTO.toDTO(job);
    }
}

module.exports = CreateJob;