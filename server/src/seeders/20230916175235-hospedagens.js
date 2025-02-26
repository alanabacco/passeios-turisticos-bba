"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "hospedagens",
      [
        {
          nome: "Hotel Avenida",
          descricao: "",
          endereco: "Avenida tal tal, 000",
          telefone: "(16) 3266-1111",
          createdAt: "2023-09-07 21:30:06",
          updatedAt: "2023-09-07 21:30:06",
        },
        {
          nome: "Pousada Prainha",
          descricao: "",
          endereco: "Praia do juqueta, 000",
          telefone: "(16) 3266-0000",
          createdAt: "2023-09-07 21:30:06",
          updatedAt: "2023-09-07 21:30:06",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("hospedagens", null, {});
  },
};
