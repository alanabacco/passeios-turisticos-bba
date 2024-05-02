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
      atracoes_turisticas.belongsToMany(models.guias_turisticos, {
        through: "atracoes_guias",
        foreignKey: "atracao_turistica_id",
      });
    }
  }
  atracoes_turisticas.init(
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
      modelName: "atracoes_turisticas",
      freezeTableName: true,
    }
  );
  return atracoes_turisticas;
};
