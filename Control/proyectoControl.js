const Proyecto = require("../Modelo/proyectos");

// Crear Proyecto

function crearProyecto(req, res) {
  var proyecto = new Proyecto();
  var parametros = req.body;

  proyecto.titulo = parametros.titulo;
  proyecto.descripcion = parametros.descripcion;
  proyecto.urlImage = parametros.urlImage;
  proyecto.urlVideo = parametros.urlVideo;
  proyecto.tiempo = parametros.tiempo;
  proyecto.donacion = parametros.donacion;
  proyecto.seccion = parametros.seccion;
  proyecto.tel = parametros.tel;
  proyecto.fecha = Date();
  

  proyecto.save((err,proyectoNuevo)=>{
      if(err){
        res.status(500).send({message:"Error del servidor"});
      } else {
          if(!proyectoNuevo){
            res.status(200).send({message:"No fue posible realizar el registro de proyecto"});
          } else {
            res.status(200).send({
                status:"Proyecto Creado",
                proyecto: proyectoNuevo,
                codeStatus: 200
            });
          }
      }
      
  })
}

//Obtener Proyectos

function obtenerProyecto(req, res){
  Proyecto.find((err,proyectosEncontrados)=>{
    if(err){
        res.status(500).send({message:"Error del servidor"});
      } else {
          if(!proyectosEncontrados){
            res.status(200).send({message:"No fue posible obtener el registro de proyecto"});
          } else {
            res.status(200).send({
                status:"Admins Encontrado",
                proyecto: proyectosEncontrados
            });
          }
      }

  });
}


//Obtener Proyecto by Id

function encontrarProyectoByID(req, res){
  var proyectoId = req.params.id;

  Proyecto.findById(proyectoId,(err,proyectosEncontrados)=>{
      if(err){
          res.status(500).send({message:"Error del servidor"});
        } else {
            if(!proyectosEncontrados){
              res.status(200).send({message:"No fue posible obtener el registro de seccion"});
            } else {
              res.status(200).send({
                  status:"Secciones Encontradas",
                  proyecto: proyectosEncontrados
              });
            }
        }
  
    });
}

//Actualizar  Proyecto

function actualizarProyecto(req, res){
    var proyectoId = req.params.id;
    var nuevosDatosProyecto = req.body;

    Proyecto.findByIdAndUpdate(proyectoId,nuevosDatosProyecto,(err,proyectoActualizado )=>{
      if(err){
          res.status(500).send({message:"Error del servidor"});
        } else {
            if(!proyectoActualizado){
              res.status(200).send({message:"No fue posible actualizar el registro de proyecto"});
            } else {
              res.status(200).send({
                  status:"Proyecto Actualizado",
                  proyecto: proyectoActualizado
              });
            }
        }
  
    });
  }

//Eliminar Proyecto

function eliminarProyecto(req, res){
    var proyectoId = req.params.id;

    Proyecto.findByIdAndDelete(proyectoId,(err,proyectoEliminado)=>{
      if(err){
          res.status(500).send({message:"Error del servidor"});
        } else {
            if(!proyectoEliminado){
              res.status(404).send({message:"No fue posible actualizar el registro de proyecto"});
            } else {
              res.status(200).send({
                  status:"Proyecto Eliminado",
                  proyecto: proyectoEliminado
              });
            }
        }
  
    });
  }

// Trae los proyectos por el id de Seccion

function obtenerProyectoByIdSeccion(req, res){
  var idSec =  req.params.idSec;
  Proyecto.find({seccion: idSec}, (err,proyectosEncontrados)=>{
    if(err){
        res.status(500).send({message:"Error del servidor"});
      } else {
          if(!proyectosEncontrados){
            res.status(200).send({message:"No fue posible obtener el registro de estos proyectos"});
          } else {
            res.status(200).send({
                status:"Proyectos Encontrados",
                proyecto: proyectosEncontrados
            });
          }
      }

  });
}

// Trae los proyectos por el id de Seccion

function obtenerProyectoByIdSeccionLimit(req, res){
  console.log("params",req.params);
  var idSec =  req.params.idSec;

  Proyecto.find({seccion: idSec}, (err,proyectosEncontrados)=>{
    if(err){
        res.status(500).send({message:"Error del servidor"});
      } else {
          if(!proyectosEncontrados){
            res.status(200).send({message:"No fue posible obtener el registro de estos proyectos"});
          } else {
            res.status(200).send({
                status:"Proyectos Encontrados",
                proyecto: proyectosEncontrados
            });
          }
      }

  }).limit(2);
}


function obtenerProyectoByTitulo(req, res){
  
  var titulo = new RegExp(`.*${req.params.titulo}.*`,'i');
  Proyecto.find({titulo: titulo}, (err,proyectosEncontrados)=>{
    if(err){
        res.status(500).send({message:"Error del servidor"});
      } else {
          if(!proyectosEncontrados){
            res.status(200).send({message:"No fue posible obtener el registro de estos proyectos"});
          } else {
            res.status(200).send({
                status:"Proyectos Encontrados",
                proyecto: proyectosEncontrados
            });
          }
      }

  });
}



//Exportamos las funciones

module.exports = {
    crearProyecto,
    obtenerProyecto,
    actualizarProyecto,
    eliminarProyecto,
    encontrarProyectoByID,
    obtenerProyectoByIdSeccion,
    obtenerProyectoByIdSeccionLimit,
    obtenerProyectoByTitulo
}