const express =  require("express");
const proyectoControl = require('../Control/proyectoControl');

var api = express.Router();

//Rutas agregar Donacion
api.post("/", proyectoControl.crearProyecto);
//Rutas consultar Donacion
api.get("/", proyectoControl.obtenerProyecto);
//Rutas consultar Donacion by ID
api.get("/:id", proyectoControl.encontrarProyectoByID);
//Rutas actualizar Donacion
api.put("/:id", proyectoControl.actualizarProyecto);
//Rutas eliminar Donacion
api.delete("/:id", proyectoControl.eliminarProyecto);

module.exports = api;