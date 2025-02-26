"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "restaurantes",
      [
        {
          nome: "Lanchonete da Tiga",
          descricao: "lanchonete",
          telefone: "(16) 3266-1111",
          endereco: "Rua Joaquim M. Carvalho, 000",
          createdAt: "2023-09-07 21:30:06",
          updatedAt: "2023-09-07 21:30:06",
        },
        {
          nome: "Pizzaria do Zaca",
          descricao: "pizzaria",
          telefone: "(16) 3266-0000",
          endereco: "Rua tal tal, 000",
          createdAt: "2023-09-07 21:30:06",
          updatedAt: "2023-09-07 21:30:06",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("restaurantes", null, {});
  },
};
