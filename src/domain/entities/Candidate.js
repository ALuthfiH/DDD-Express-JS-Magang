class Candidate {
  constructor({
    id,
    userId,
    major,
    gender,
    address,
    noWhatsapp,
    curriculumVitae,
    portofolio,
    workExperience,
    passFile,
    isEvaluation,
  }) {
    this.id = id;
    this.userId = userId;
    this.major = major;
    this.gender = gender;
    this.address = address;
    this.noWhatsapp = noWhatsapp;
    this.curriculumVitae = curriculumVitae;
    this.portofolio = portofolio;
    this.workExperience = workExperience;
    this.passFile = passFile;
    this.isEvaluation = isEvaluation;
  }
}

module.exports = Candidate;
