"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class atracao_turistica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  atracao_turistica.init(
    {
      nome: DataTypes.STRING,
      descricao: DataTypes.STRING,
      endereco: DataTypes.STRING,
      telefone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "atracao_turistica",
      freezeTableName: true,
    }
  );
  return atracao_turistica;
};
