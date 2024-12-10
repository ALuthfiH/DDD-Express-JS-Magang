'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CadidateJobs', {
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
          model: "Candidates",
          key: 'id'
        },
        onUpdate : 'CASCADE',
        onDelete : 'CASCADE'
      },
      jobId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Jobs",
          key: 'id'
        },
        onUpdate : 'CASCADE',
        onDelete : 'CASCADE'
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
    await queryInterface.dropTable('CadidateJobs');
  }
};