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
      nome: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [2, 255],
            msg: "O campo nome deve ter no mínimo 3 caracteres.",
          },
        },
      },
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
