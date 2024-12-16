class UserDTO {
  static toDTO(user) {
    if (!user) {
      throw new Error("Data user tidak boleh kosong.");
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

  static fromDTO(data) {
    if (!data.name || !data.email || !data.password) {
      throw new Error("Semua properti nama, email dan password harus diisi.");
    }

    return {
      name: data.name,
      email: data.email,
      password: data.password,
    };
  }
}

module.exports = UserDTO;