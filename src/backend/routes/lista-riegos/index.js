const express = require('express')

const routerListaRiegos = express.Router()

var pool = require('../../mysql-connector');

routerListaRiegos.get('/:dispositivoId', function(req, res) {
    const dispositivoId = req.params.dispositivoId;
    console.log(dispositivoId);
    const sqlQuery = 'SELECT * FROM Log_Riegos WHERE electrovalvulaId = ? ORDER BY fecha DESC';
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

module.exports = routerListaRiegos