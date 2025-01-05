class UserRepository {
  async save(user) {
    throw new Error("Metode save() harus diimplmentasikan.");
  }

  async findByEmail(email) {
    throw new Error("Metode findByEmail() harus diimplementasikan.");
  }

  async count() {
    throw new Error("Metode count() harus diimplmenetasikan.");
  }
}

module.exports = UserRepository;
