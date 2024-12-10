'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Candidate.belongsTo(models.User, { foreignKeys: 'userId', as: 'user' })
      models.Candidate.hasOne(models.Score, { foreignKey: 'candidateId', as: 'candidate' })
      models.Candidate.belongsToMany(models.Job, { through: models.CandidateJob, foreignKey: 'candidateId', as : 'jobs' })
    }
  }
  Candidate.init({
    usedId: DataTypes.INTEGER,
    major: DataTypes.STRING,
    gender: DataTypes.STRING,
    address: DataTypes.STRING,
    noWhatsapp: DataTypes.STRING,
    curriculumVitae: DataTypes.STRING,
    portofolio: DataTypes.STRING,
    workExperience: DataTypes.STRING,
    passFile: DataTypes.STRING,
    isEvaluation: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Candidate',
  });
  return Candidate;
};