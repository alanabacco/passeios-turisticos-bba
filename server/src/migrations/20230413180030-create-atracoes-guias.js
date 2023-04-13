"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("atracoes_guias", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      atracao_turistica_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          // atracoes turisticas pode ter varios guias n:n
          model: "atracoes_turisticas",
          key: "id",
        },
      },
      guia_turistico_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          // guias podem ter varias atracoes turisticas n:n
          model: "guias_turisticos",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("atracoes_guias");
  },
};
