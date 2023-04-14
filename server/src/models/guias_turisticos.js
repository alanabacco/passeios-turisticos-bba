"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class guias_turisticos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      guias_turisticos.belongsToMany(models.atracoes_turisticas, {
        through: "atracoes_guias",
        foreignKey: "guia_turistico_id",
      });
    }
  }
  guias_turisticos.init(
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
      telefone: DataTypes.STRING,
      tipos_turismo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "guias_turisticos",
      freezeTableName: true,
    }
  );
  return guias_turisticos;
};
