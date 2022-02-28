const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('sales',{
      products:{
        type: DataTypes.JSON,
        allowNull: false
      },
      earnings:{
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
  });
};