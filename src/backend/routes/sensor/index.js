const express = require('express')

const routerSensor = express.Router()

var pool = require('../../mysql-connector');
var valor; 
routerSensor.get('/:dispositivoId', function(req, res) {
    const dispositivoId = req.params.dispositivoId;
    //console.log(dispositivoId);
    const sqlQuery = 'SELECT valor FROM Mediciones WHERE dispositivoId = ? ORDER BY fecha DESC LIMIT 1';
    pool.query(sqlQuery, [dispositivoId], function(error, results)  {    
        if (error) {
            res.send(error).status(400);
            return;
        }
        
        console.log("el resultado es" +results[0].valor);
        res.send(results[0].valor);
    });
})
routerSensor.post('/dato', function(req, res) {
    const sqlQuery = "INSERT INTO Log_Riegos( apertura, fecha, electrovalvulaId) VALUES (?, ?, ?)";
    valor = req.body;
    console.log("entro a preguntar si cargo a log con estos valores ", valor);
        //sensorId: this.id,
        //valor: this.valorObtenido,
        //fecha: this.currentDate,
        //apertura: 1
    const formattedFecha = new Date(valor.fecha).toISOString().slice(0, 19).replace('T', ' ');
    pool.query(sqlQuery, [valor.apertura, formattedFecha, valor.sensorId], function(error, results)  {    
        if (error) {
            res.send(error).status(400);
            return;
        }
        console.log("se cargo los datos");
        res.send();
    });
    //res.send({'mensaje':'Estoy en dispositivo'}).status(200)
})
routerSensor.post('/mediciones', function(req, res) {
    valor = req.body;
    console.log("entro con estos valores " + req.body);
   // if(valor.consulta == 1){
        const sqlQuery = "INSERT INTO Mediciones(fecha, valor, dispositivoId) VALUES (?, ?, ?)";
        console.log("entro a ", valor);
        const formattedFecha = new Date(valor.fecha).toISOString().slice(0, 19).replace('T', ' ');    
        pool.query(sqlQuery, [formattedFecha, valor.valor, valor.sensorId], function(error, results)  {    
            if (error) {
                res.send(error).status(400);
                return;
            }
            console.log("se cargo los datos");   
            res.send();
        });
        //res.send({'mensaje':'Estoy en dispositivo'}).status(200)  
  //  }
    
    
})
module.exports = routerSensor;