"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "atracoes_turisticas",
      [
        {
          nome: "Praça Herculandia",
          telefone: "1632660000",
          endereco: "praça herculandia, s/n",
          createdAt: "2023-09-07 21:30:06",
          updatedAt: "2023-09-07 21:30:06",
        },
        {
          nome: "Praia Juqueta",
          telefone: "1632661111",
          endereco: "praia juqueta, corrego do gato, s/n",
          createdAt: "2023-09-07 21:30:06",
          updatedAt: "2023-09-07 21:30:06",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("atracoes_turisticas", null, {});
  },
};
