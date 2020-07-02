const express =  require("express");
const seccionControl = require('../Control/seccionControl');

var api = express.Router();

//Rutas agregar Donacion
api.post("/", seccionControl.crearSeccion);
//Rutas consultar Donacion
api.get("/", seccionControl.obtenerSeccion);
//Rutas consultar Donacion by ID
api.get("/:id", seccionControl.encontrarSeccionByID);
//Rutas actualizar Donacion
api.put("/:id", seccionControl.actualizarSeccion);
//Rutas eliminar Donacion
api.delete("/:id", seccionControl.actualizarSeccion);

module.exports = api;