'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetalleCarros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DetalleCarros.belongsTo(models.Productos, {
        foreignKey: 'id',
        target_key: 'idProducto'
      })
      DetalleCarros.belongsTo(models.Carros, {
        foreignKey: 'id',
        target_key: 'idCarro'
      })
      // define association here
    }
  }
  DetalleCarros.init({
    idCarro: DataTypes.INTEGER,
    idProducto: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DetalleCarros',
  });
  return DetalleCarros;
};