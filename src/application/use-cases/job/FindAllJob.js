const { JobDTO } = require("../../dtos");

class FindAllJob {
    constructor({ jobRepository }) {
        this.jobRepository = jobRepository;
    }

    async execute() {
        const jobs = await this.jobRepository.findAll();

        return jobs.map(job => JobDTO.toDTO(job))
    }
}

module.exports = FindAllJob;