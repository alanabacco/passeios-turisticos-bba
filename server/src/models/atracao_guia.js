"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class atracao_guia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const atracaoTuristica = sequelize.define("atracao_turistica_id", {
        id: DataTypes.INTEGER,
      });
      const guiaTuristico = sequelize.define("guia_turistico_id", {
        id: DataTypes.INTEGER,
      });
      guiaTuristico.belongsToMany(atracaoTuristica, { through: "atracao_guia" });
      atracaoTuristica.belongsToMany(guiaTuristico, { through: "atracao_guia" });
    }
  }
  atracao_guia.init(
    {
      atracao_turistica_id: DataTypes.INTEGER,
      guia_turistico_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "atracao_guia",
      freezeTableName: true,
    }
  );
  return atracao_guia;
};
