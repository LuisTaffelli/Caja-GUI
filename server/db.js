const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});


const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

let {
  Product,
  Sale
} = sequelize.models


module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
