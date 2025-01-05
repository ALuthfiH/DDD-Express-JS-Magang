const { CandidateDTO } = require("../../dtos");

class CreateCandidate {
    constructor({ candidateRepository }) {
        this.candidateRepository = candidateRepository;
    }

    async execute(jobId, candidateData) {
        console.log(jobId, candidateData);
        const candidateDomainData = CandidateDTO.fromDTO(candidateData);
        const candidate = await this.candidateRepository.save(jobId, candidateDomainData);

        return CandidateDTO.toDTO(candidate);
    }
}

module.exports = CreateCandidate;