const express =  require("express");
const proyectoControl = require('../Control/proyectoControl');

var api = express.Router();

//Rutas agregar Proyecto
api.post("/", proyectoControl.crearProyecto);
//Rutas consultar Proyecto
api.get("/", proyectoControl.obtenerProyecto);
//Rutas consultar Proyecto by ID
api.get("/:id", proyectoControl.encontrarProyectoByID);
//Rutas actualizar Proyecto
api.put("/:id", proyectoControl.actualizarProyecto);
//Rutas eliminar Proyecto
api.delete("/:id", proyectoControl.eliminarProyecto);
//Rutas consultar Proyecto by IDSeccion
api.get("/secc/:idSec", proyectoControl.obtenerProyectoByIdSeccion);

module.exports = api;