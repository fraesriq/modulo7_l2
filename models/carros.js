'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Carros.belongsTo(models.Usuarios, {
        foreignKey: 'id',
        target_key: 'idUsuario'
      })
      Carros.hasMany(models.DetalleCarros, {
        foreignKey: 'idProducto'
      })
      // define association here
    }
  }
  Carros.init({
    idUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carros',
  });
  return Carros;
};