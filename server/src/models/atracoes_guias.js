"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class atracoes_guias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      atracoes_guias.belongsTo(models.guias_turisticos, {
        foreignKey: "guia_turistico_id",
      });
      atracoes_guias.belongsTo(models.atracoes_turisticas, {
        foreignKey: "atracao_turistica_id",
      });
    }
  }
  atracoes_guias.init(
    {
      atracao_turistica_id: DataTypes.INTEGER,
      guia_turistico_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "atracoes_guias",
      freezeTableName: true,
    }
  );
  return atracoes_guias;
};
