const express =  require("express");
const seccionControl = require('../Control/seccionControl');

var api = express.Router();

//Rutas agregar Seccion
api.post("/", seccionControl.crearSeccion);
//Rutas consultar Seccion
api.get("/", seccionControl.obtenerSeccion);
//Rutas consultar Seccion by ID
api.get("/seccionbyid/:id", seccionControl.encontrarSeccionByID);
//Rutas actualizar Seccion
api.put("/:id", seccionControl.actualizarSeccion);
//Rutas eliminar Seccion
api.delete("/:id", seccionControl.eliminarSeccion);
//Rutas consultar Seccion by ID
api.get("/seccionbyname/:name", seccionControl.encontrarSeccionByName);


module.exports = api;