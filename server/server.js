import appModulePath from 'app-module-path';
import http from 'http';
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/general.js')
const { conn } = require("./db.js");
const sales = require('./routes/sales.js')


appModulePath.addPath(`${__dirname}`);

const Api = express();
const HTTP = http.Server(Api);


Api.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
Api.use(bodyParser.json({ limit: '50mb' }));
Api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


Api.use('/sales', sales)

Api.use('/', routes)



conn.sync({ force: false }).then(() => {
    HTTP.listen(9001, () => {
    console.log('listening on *:9001');
});

})

