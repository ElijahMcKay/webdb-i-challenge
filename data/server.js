const express = require('express'); 

const router = express.Router(); 

const server = express(); 

server.use(express.json()); 

const accounts = require('./seeds/accounts'); 

server.get('/', (req, res) => {

})

server.post('/', (req, res) => {
    
})

server.put('/', (req, res) => {
    
})

server.delete('/', (req, res) => {
    
})




module.exports = server; 