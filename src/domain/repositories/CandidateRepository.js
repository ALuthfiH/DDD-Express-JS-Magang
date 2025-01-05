class CandidateRepository {
  async save(jobId, candidate) {
    throw new Error("Metode save() harus diimplmentasikan.");
  }
}

module.exports = CandidateRepository;
