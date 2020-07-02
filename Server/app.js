const express = require('express');
const cors = require('cors');
const app = express();

// Declarar las rutas de las api
const usuarioRutas = require('../Rutas/usuarioRutas')
const donacionRutas = require('../Rutas/donacionRutas')
const seccionRutas = require('../Rutas/seccionRutas')
const adminRutas = require('../Rutas/adminRutas')
const proyectoRutas = require('../Rutas/proyectoRutas')
// MIDDLEWARE
app.use(express.json());
app.use(cors());

// Consumo de las rutas
app.use('/api/usuarios', usuarioRutas);
app.use('/api/donaciones', donacionRutas);
app.use('/api/secciones', seccionRutas);
app.use('/api/admin', adminRutas);
app.use('/api/proyecto', proyectoRutas);

module.exports = app;
