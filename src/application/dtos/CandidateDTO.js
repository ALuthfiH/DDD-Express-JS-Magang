class CandidateDTO {
  static toDTO(candidate) {
    if (!candidate) throw new Error("Data kandidat tidak boleh kosong.");

    return {
      id: candidate.id,
      userId: candidate.userId,
      major: candidate.major,
      gender: candidate.gender,
      address: candidate.address,
      noWhatsapp: candidate.noWhatsapp,
      curriculumVitae: candidate.curriculumVitae,
      portofolio: candidate.portofolio,
      workExperience: candidate.workExperience,
      passFile: candidate.passFile,
      isEvaluation: candidate.isEvaluation,
    };
  }

  static fromDTO(data) {
    if (
      !data.userId ||
      !data.major ||
      !data.gender ||
      !data.address ||
      !data.noWhatsapp ||
      !data.curriculumVitae ||
      !data.portofolio ||
      !data.workExperience
    ) {
      throw new Error("Semua properti harus diisi");
    }

    return {
      userId: data.userId,
      major: data.major,
      gender: data.gender,
      address: data.address,
      noWhatsapp: data.noWhatsapp,
      curriculumVitae: data.curriculumVitae,
      portofolio: data.portofolio,
      workExperience: data.workExperience,
      passFile: data.passFile,
      isEvaluation: data.isEvaluation,
    };
  }
}

module.exports = CandidateDTO;
