const express = require('express'); 

const router = express.Router(); 

const server = express(); 

server.use(express.json()); 

const accounts = require('./seeds/accounts'); 




router.get('/accounts', (req, res) => {
    res.status(200).json({ api: 'up' }) 
})

// router.post('/accounts', (req, res) => {
    
// })

// router.put('/accounts', (req, res) => {
    
// })

// router.delete('/accounts', (req, res) => {
    
// })




module.exports = server; 