const express = require('express')

const routerDispositivo = express.Router()

var pool = require('../../mysql-connector');

routerDispositivo.get('/', function(req, res) {
    console.log("entro");
    pool.query('Select * from Dispositivos', function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        console.log("resultado " + result);
        res.send(result);
    });
    //res.send({'mensaje':'Estoy en dispositivo'}).status(200)
})

module.exports = routerDispositivo