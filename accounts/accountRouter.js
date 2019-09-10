const express = require('express'); 

const db = require('../data/dbConfig'); 


const router = express.Router(); 


router.get('/', (req, res) => {
    db('accounts')
    .then(accounts => {
        res.status(200).json(accounts); 
    })  
    .catch(err => {
        res.status(500).json(err); 
    })
})

router.post('/', (req, res) => {
    const body = req.body
    db('accounts').insert(body)
    .then(accounts => {
        res.status(201).json(accounts)
    })
    .catch(err => {
        res.status(500).json({ message: err })
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params; 
    const body = req.body; 
    db('accounts').where({ id }).update(body)
    .then(accounts => {
        res.status(200).json(accounts)
    })
    .catch(err => {
        res.status(500).json({ message: err})
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params; 
    db('accounts').where({ id }).del() 
    .then(accounts => {
        res.status(200).json(accounts)
    })
    .catch(err => {
        res.status(500).json({ message: err })
    })
})

module.exports = router; 







