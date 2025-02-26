"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const dataAtual = new Date();
    const depoisDeAmanha = new Date(
      dataAtual.getFullYear(),
      dataAtual.getMonth(),
      dataAtual.getDate() + 2
    );
    const amanha = new Date(
      dataAtual.getFullYear(),
      dataAtual.getMonth(),
      dataAtual.getDate() + 1
    );
    const proxSemana = new Date(
      dataAtual.getFullYear(),
      dataAtual.getMonth(),
      dataAtual.getDate() + 7
    );

    await queryInterface.bulkInsert(
      "eventos",
      [
        {
          nome: "Feira Livre",
          descricao: "Atração musical e brinquedos. A partir das 18h.",
          endereco: "Praça Central",
          data_inicio: dataAtual,
          data_fim: dataAtual,
          createdAt: dataAtual,
          updatedAt: dataAtual,
        },
        {
          nome: "Feira Livre",
          descricao: "Atração musical e brinquedos. A partir das 18h.",
          endereco: "Praça Central",
          data_inicio: proxSemana,
          data_fim: proxSemana,
          createdAt: dataAtual,
          updatedAt: dataAtual,
        },
        {
          nome: "Evento Fictício",
          descricao: "descrição",
          endereco: "Praça Central",
          data_inicio: depoisDeAmanha,
          data_fim: depoisDeAmanha,
          createdAt: dataAtual,
          updatedAt: dataAtual,
        },
        {
          nome: "Outro Evento Fictício",
          descricao: "descrição do evento fictício",
          endereco: "Praça Herculandia",
          data_inicio: dataAtual,
          data_fim: amanha,
          createdAt: dataAtual,
          updatedAt: dataAtual,
        },
        {
          nome: "Evento Fictício de Alguns Dias",
          descricao: "decrição do evento fictício de alguns dias",
          endereco: "Praça Herculandia",
          data_inicio: depoisDeAmanha,
          data_fim: proxSemana,
          createdAt: dataAtual,
          updatedAt: dataAtual,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("eventos", null, {});
  },
};
