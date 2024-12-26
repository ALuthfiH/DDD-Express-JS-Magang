const { JobDTO } = require("../../dtos");

class UpdateOneJob {
    constructor({ jobRepository }) {
        this.jobRepository = jobRepository;
    }

    async execute(jobId, jobData) {
        const jobDomainId = JobDTO.fromUpdateDTO(jobId);
        const jobDomainData = JobDTO.fromDTO(jobData);
        const job = await this.jobRepository.updateById(jobDomainId.id, jobDomainData);

        return JobDTO.toDTO(job);
    }
}

module.exports = UpdateOneJob;