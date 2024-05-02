"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "informacoes_uteis",
      [
        {
          nome: "Taxi 1",
          descricao: "",
          endereco: "centro",
          telefone: "1632661111",
          createdAt: "2023-09-07 21:30:06",
          updatedAt: "2023-09-07 21:30:06",
        },
        {
          nome: "Posto Gasolina 1",
          descricao: "",
          endereco: "Rodovia tal, km000",
          telefone: "1632660000",
          createdAt: "2023-09-07 21:30:06",
          updatedAt: "2023-09-07 21:30:06",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("informacoes_uteis", null, {});
  },
};
