"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class informacoes_uteis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  informacoes -
    uteis.init(
      {
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        endereco: DataTypes.STRING,
        telefone: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "informacoes_uteis",
        freezeTableName: true,
      }
    );
  return informacoes_uteis;
};
