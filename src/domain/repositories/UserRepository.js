class UserRepository {
  async save(user) {
    throw new Error("Metode save() harus diimplmentasikan.");
  }

  async findByEmail(email) {
    throw new Error("Metode findByEmail() harus diimplementasikan.");
  }
}

module.exports = UserRepository;
