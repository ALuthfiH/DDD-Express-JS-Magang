class CountJob {
    constructor({ jobRepository }) {
        this.jobRepository = jobRepository;
    }

    async execute() {
        return this.jobRepository.count();
    }
}

module.exports = CountJob;