const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product',{
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      stock: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      stocktype: {
        type: DataTypes.STRING,
        allowNull: false
      },
      unitprice:{
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      id: {
        allowNull: false,
        unique: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },    
  },{
    timestamps: false,
  });
};