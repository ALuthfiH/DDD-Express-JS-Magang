class CandidateRepository {
  async save(jobId, candidate) {
    throw new Error("Metode save() harus diimplmentasikan.");
  }

  async findAll() {
    throw new Error("Metode findAll() harus diimplmentasikan.");
  }

  async findOne(id) {
    throw new Error("Metode findOne() harus diimplementasikan.");
  }
}

module.exports = CandidateRepository;
