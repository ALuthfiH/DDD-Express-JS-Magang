const { JobDTO } = require("../../dtos");

class DeleteJob {
    constructor({ jobRepository }) {
        this.jobRepository = jobRepository;
    }

    async execute(jobId) {
        const jobDomainData = JobDTO.fromDeleteDTO(jobId);
        await this.jobRepository.deleteById(jobDomainData.id);
        return JobDTO.toDeleteDTO(jobDomainData.id);
    }
}

module.exports = DeleteJob;