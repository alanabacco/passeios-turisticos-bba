"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuarios.init(
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
      senha: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [6, 255],
            msg: "O campo senha deve ter no mínimo 6 caracteres.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "usuarios",
      defaultScope: {
        attributes: {
          exclude: ["senha"],
        },
      },
      freezeTableName: true,
      paranoid: true, // soft delete
    }
  );
  return usuarios;
};
