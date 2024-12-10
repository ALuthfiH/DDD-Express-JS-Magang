'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Candidates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usedId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      major: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      noWhatsapp: {
        type: Sequelize.STRING,
        allowNull: false
      },
      curriculumVitae: {
        type: Sequelize.STRING,
        allowNull: false
      },
      portofolio: {
        type: Sequelize.STRING,
        allowNull: false
      },
      workExperience: {
        type: Sequelize.STRING,
        allowNull: false
      },
      passFile: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isEvaluation: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
    await queryInterface.dropTable('Candidates');
  }
};