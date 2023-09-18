"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "eventos",
      [
        {
          nome: "Feira Livre",
          descricao: "Todas as quintas",
          endereco: "Praça Central",
          data_inicio: "2023-05-11",
          data_fim: "2023-05-11",
          createdAt: "2023-09-07 21:30:06",
          updatedAt: "2023-09-07 21:30:06",
        },
        {
          nome: "Feira Livre",
          descricao: "Todas as quintas",
          endereco: "Praça Central",
          data_inicio: "2023-09-28",
          data_fim: "2023-09-28",
          createdAt: "2023-09-07 21:30:06",
          updatedAt: "2023-09-07 21:30:06",
        },
        {
          nome: "Feira Livre",
          descricao: "Todas as quintas",
          endereco: "Praça Central",
          data_inicio: "2023-11-30",
          data_fim: "2023-11-30",
          createdAt: "2023-09-07 21:30:06",
          updatedAt: "2023-09-07 21:30:06",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("eventos", null, {});
  },
};
