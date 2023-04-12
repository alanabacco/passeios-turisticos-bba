"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class atracoes_turisticas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  atracoes_turisticas.init(
    {
      nome: DataTypes.STRING,
      descricao: DataTypes.STRING,
      endereco: DataTypes.STRING,
      telefone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "atracoes_turisticas",
      freezeTableName: true,
    }
  );
  return atracoes_turisticas;
};
