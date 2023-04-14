"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class eventos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  eventos.init(
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
      data_inicio: DataTypes.DATEONLY,
      data_fim: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "eventos",
      freezeTableName: true,
    }
  );
  return eventos;
};
