"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hospedagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hospedagem.init(
    {
      nome: DataTypes.STRING,
      descricao: DataTypes.STRING,
      endereco: DataTypes.STRING,
      telefone: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "hospedagem",
      freezeTableName: true,
    }
  );
  return hospedagem;
};
