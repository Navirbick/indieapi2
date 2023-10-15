require('dotenv').config();
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 8000;
const server = http.createServer(app);
console.log(`Servico no endereco 0.0.0.0:${process.env.PORT} \n`);
server.listen(port);


