class JobRepository {
    async save(job) {
      throw new Error("Metode save() harus diimplmentasikan.");
    }
  
    async findAll() {
      throw new Error("Metode findAll() harus diimplementasikan.");
    }

    async findById(id) {
        throw new Error("Metode findById() harus diimplementasikan.");
    }
    
    async updateById(id, job) {
        throw new Error("Metode updateById() harus diimplementasikan.");
    }

    async deleteById(id) {
        throw new Error("Metode deleteById() harus diimplementasikan.");
    }
  }
  
  module.exports = JobRepository;
  