"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "usuarios",
      [
        {
          id: "8c444964-e172-4066-884a-73ed95a2ffcb",
          nome: "usuario",
          senha: "$2a$08$gyCFbjZRcgEv4.wpKZgpzOfZZJ9TJJCt/pyyDg0y3ZIVWanocDHB2",
          createdAt: "2023-09-07 21:30:06",
          updatedAt: "2023-09-07 21:30:06",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("usuarios", null, {});
  },
};
