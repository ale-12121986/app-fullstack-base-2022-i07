//=======[ Settings, Imports & Data ]==========================================

var PORT    = 3000;

const cors = require('cors');

var express = require('express');
const bodyParser = require('body-parser'); // Importa el módulo body-parser
var app = express();
app.use(bodyParser.json()); // Agrega el middleware bodyParser.json()
var pool = require('./mysql-connector');
const routerDispositivo = require('./routes/dispositivo');
const routerSensor = require('./routes/sensor');
const routerListaSensor = require('./routes/lista-sensor');
const routerListaRiegos = require('./routes/lista-riegos');
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const myLogger = function(req, res, next) {
    console.log('Logged')
    next()
}

const authenticator = function(req, res, next) {
    // si el usuario tiene permiso
    next()
    // si el usuario no tiene permiso
    res.send('No tenes permiso para acceder al recurso').status(401)
}

app.use(myLogger)
// to parse application/json
app.use(express.json()); 
// to serve static files
app.use(express.static('/home/node/app/static/'));
// to enable corss
app.use(cors(corsOptions));
 
app.use('/dispositivo', routerDispositivo);
app.use('/sensor', routerSensor);
app.use('/lista-sensor', routerListaSensor);
app.use('/lista-riegos',routerListaRiegos);

//=======[ Main module code ]==================================================

app.get('/', function(req, res, next) {
    res.send({'mensaje': 'Hola DAM'}).status(200);
});

// app.get('/user/', function(req, res, next) {
//     pool.query('Select * from Usuarios', function(err, result, fields) {
//         if (err) {
//             res.send(err).status(400);
//             return;
//         }
//         res.send(result);
//     });
// });

app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
