'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.Job.belongsToMany(models.Candidate, { through: models.CandidateJob, foreignKey: 'jobId', as: 'candidates' })
    }
  }
  Job.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    image: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};