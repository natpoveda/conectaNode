const express =  require("express");
const donacionControl = require('../Control/donacionControl');

var api = express.Router();

//Rutas agregar Donacion
api.post("/", donacionControl.crearDonacion);
//Rutas consultar Donacion
api.get("/", donacionControl.obtenerDonacion);
//Rutas consultar Donacion by ID
api.get("/:id", donacionControl.encontrarDonacionByID);
//Rutas actualizar Donacion
api.put("/:id", donacionControl.actualizarDonacion);
//Rutas eliminar Donacion
api.delete("/:id", donacionControl.eliminarDonacion);

module.exports = api;
