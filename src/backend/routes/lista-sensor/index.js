const express = require('express')

const routerListaSensor = express.Router()

var pool = require('../../mysql-connector');

routerListaSensor.get('/:dispositivoId', function(req, res) {
    const dispositivoId = req.params.dispositivoId;
    console.log(dispositivoId);
    const sqlQuery = 'SELECT valor, fecha FROM Mediciones WHERE dispositivoId = ? ORDER BY fecha DESC';
    pool.query(sqlQuery, [dispositivoId], function(error, results)  {    
        if (error) {
            res.send(error).status(400);
            return;
        }
        
        console.log("el resultado es" +results);
        res.send(results);
    });
    //res.send({'mensaje':'Estoy en dispositivo'}).status(200)
})

module.exports = routerListaSensor