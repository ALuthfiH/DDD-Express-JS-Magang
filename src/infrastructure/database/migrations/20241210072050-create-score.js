'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Scores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      candidateId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Candidates',
          key: 'id'
        },
        onUpdate : 'CASCADE',
        onDelete : 'CASCADE'
      },
      workExperience: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      education: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      personalitySkills: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      reference: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      skillsTest: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      culturalFit: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      interview: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      criteria: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      score: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Scores');
  }
};