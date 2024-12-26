class JobDTO {
  static toDTO(job) {
    if (!job) {
      throw new Error("Data job tidak boleh kosong.");
    }

    return {
      id: job.id,
      title: job.title,
      description: job.description,
      location: job.location,
      image: job.image,
      startDate: job.startDate,
      endDate: job.endDate,
    };
  }

  static fromDTO(data) {
    if (
      !data.title ||
      !data.description ||
      !data.location ||
      !data.image ||
      !data.startDate ||
      !data.endDate
    ) {
      throw new Error("Semua properti harus diisi.");
    }

    return {
      title: data.title,
      description: data.description,
      location: data.location,
      image: data.image,
      startDate: data.startDate,
      endDate: data.endDate,
    };
  }

  static fromFindDTO(id) {
    if (!id) {
      throw new Error("Id harus diisi.");
    }

    return { id: id };
  }

  static fromUpdateDTO(id) {
    if (!id) {
      throw new Error("Id harus diisi.");
    }

    return { id: id };
  }

  static fromDeleteDTO(id) {
    if (!id) {
        throw new Error("Id harus diisi.");
      }
  
      return { id: id };
  }

  static toDeleteDTO(id) {
    if (!id) {
        throw new Error("Id harus diisi.");
      }
  
      return { id: id };
  }
}

module.exports = JobDTO;
