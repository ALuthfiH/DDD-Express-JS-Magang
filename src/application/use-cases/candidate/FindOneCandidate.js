class FindOneCandidate {
    constructor({ candidateRepository }) {
        this.candidateRepository = candidateRepository;
    }

    async execute(id) {
        const candidate = await this.candidateRepository.findOne(id);
        return candidate;
    }
}

module.exports = FindOneCandidate;