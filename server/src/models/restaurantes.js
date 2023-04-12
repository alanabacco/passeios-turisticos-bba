"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class restaurantes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  restaurantes.init(
    {
      nome: DataTypes.STRING,
      descricao: DataTypes.STRING,
      endereco: DataTypes.STRING,
      telefone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "restaurantes",
      freezeTableName: true,
    }
  );
  return restaurantes;
};
