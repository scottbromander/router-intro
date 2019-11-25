const express = require('express');
const router = express.Router();

const dogArray = [];

// /widget - GET

router.get('/', (req,res) => {
    res.send(dogArray);
});

router.post('/', (req,res) => {
    /*
    { "name": String }
    */
    // req.body.name
    dogArray.push(req.body.name);
    res.sendStatus(201);
});

router.delete('/', (req,res) => {

});

router.put('/', (req,res) => {
    
});

module.exports = router;