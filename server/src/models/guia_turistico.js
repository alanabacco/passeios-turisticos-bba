"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class guia_turistico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  guia_turistico.init(
    {
      nome: DataTypes.STRING,
      telefone: DataTypes.INTEGER,
      tipos_turismo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "guia_turistico",
      freezeTableName: true,
    }
  );
  return guia_turistico;
};
