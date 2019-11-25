const express = require('express');
const router = express.Router();

const catArray = [];

// POST - '/'

router.get('/', (req,res) => {
    res.send(catArray);
});

router.post('/', (req,res) => {
    /*
    { "name": String }
    */
    // req.body.name
    catArray.push(req.body.name);
    res.sendStatus(201);
});

router.delete('/', (req,res) => {

});

router.put('/', (req,res) => {
    
});

module.exports = router;