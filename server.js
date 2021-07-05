const express = require('express');
const helmet = require('helmet'); 
const accountRouter = require('./accounts/accountRouter'); 

const server = express();  

server.use(helmet()); 
server.use(express.json());

server.use('/accounts', accountRouter);

module.exports = server;