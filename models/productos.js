'use strict';
const {
  Model
} = require('sequelize');
const detallecarros = require('./detallecarros');
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Productos.belongsTo(models.Categorias, {
        foreignKey: 'id',
        target_key: 'idCategoria'
      })
      
      Productos.hasMany(models.DetalleCarros, {
        foreignKey: 'idProducto'
      })
    }
  }
  Productos.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    imagen: DataTypes.STRING,
    idCategoria: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Productos',
  });
  return Productos;
};