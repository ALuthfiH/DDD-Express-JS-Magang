class FindAllCandidate {
    constructor({ candidateRepository }) {
        this.candidateRepository = candidateRepository;
    }

    async execute() {
        const candidates = await this.candidateRepository.findAll();
        return candidates;
    }
}

module.exports = FindAllCandidate;