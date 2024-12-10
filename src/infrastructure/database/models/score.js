'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Score.belongsTo(models.Candidate, { foreignKey: 'candidateId', as: 'candidate' })
    }
  }
  Score.init({
    candidateId: DataTypes.INTEGER,
    workExperience: DataTypes.INTEGER,
    education: DataTypes.INTEGER,
    personalitySkills: DataTypes.INTEGER,
    reference: DataTypes.INTEGER,
    skillsTest: DataTypes.INTEGER,
    culturalFit: DataTypes.INTEGER,
    interview: DataTypes.INTEGER,
    criteria: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Score',
  });
  return Score;
};