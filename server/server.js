import appModulePath from 'app-module-path';
import http from 'http';
import express from 'express';
import cors from 'cors';
const routes = require('./routes/general.js')
const { conn } = require("./db.js");
const sales = require('./routes/sales.js')


appModulePath.addPath(`${__dirname}`);

const Api = express();
const HTTP = http.Server(Api);

Api.use(cors());

Api.use('/sales', sales)

Api.use('/', routes)



conn.sync({ force: false }).then(() => {
    HTTP.listen(9001, () => {
    console.log('listening on *:9001');
});

})

