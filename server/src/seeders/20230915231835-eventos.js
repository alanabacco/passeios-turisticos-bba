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
          data_inicio: "2023-08-11",
          data_fim: "2023-08-11",
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
          nome: "Evento Fictício",
          descricao: "descroção",
          endereco: "Praça Central",
          data_inicio: "2023-09-26",
          data_fim: "2023-09-26",
          createdAt: "2023-09-07 21:30:06",
          updatedAt: "2023-09-07 21:30:06",
        },
        {
          nome: "Outro Evento Fictício",
          descricao: "descrição do evento fictício",
          endereco: "Praça Herculandia",
          data_inicio: "2023-09-26",
          data_fim: "2023-09-26",
          createdAt: "2023-09-07 21:30:06",
          updatedAt: "2023-09-07 21:30:06",
        },
        {
          nome: "Evento Fictício Outubro",
          descricao: "decrição do evento fictício de outubro",
          endereco: "Praça Herculandia",
          data_inicio: "2023-10-10",
          data_fim: "2023-10-10",
          createdAt: "2023-09-07 21:30:06",
          updatedAt: "2023-09-07 21:30:06",
        },
        {
          nome: "Feira Livre",
          descricao: "Todas as quintas",
          endereco: "Praça Central",
          data_inicio: "2023-10-26",
          data_fim: "2023-10-26",
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
