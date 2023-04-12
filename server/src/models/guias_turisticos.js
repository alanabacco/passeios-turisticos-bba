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
    }
  }
  guias_turisticos.init(
    {
      nome: DataTypes.STRING,
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
