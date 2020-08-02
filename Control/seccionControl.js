const Seccion = require("../Modelo/secciones");
//const { param } = require("../Server/app");

// Crear Seccion

function crearSeccion(req, res) {
  var seccion = new Seccion();
  var parametros = req.body;

  seccion.urlImagen = parametros.urlImagen;
  seccion.nombre = parametros.nombre;
  seccion.descripcion = parametros.descripcion;
 
  seccion.save((err,seccionNueva)=>{
      if(err){
        res.status(500).send({message:"Error del servidor"});
      } else {
          if(!seccionNueva){
            res.status(200).send({message:"No fue posible realizar el registro de seccion"});
          } else {
            res.status(200).send({
                status:"Seccion Creada",
                seccion: seccionNueva,
                codeStatus: 200
            });
          }
      }
      
  })
}

//Obtener Seccion

function obtenerSeccion(req, res){
  Seccion.find((err,seccionesEncontradas)=>{
    if(err){
        res.status(500).send({message:"Error del servidor"});
      } else {
          if(!seccionesEncontradas){
            res.status(200).send({message:"No fue posible obtener el registro de seccion"});
          } else {
            res.status(200).send({
                status:"Secciones Encontradas",
                seccion: seccionesEncontradas
            });
          }
      }

  });
}

//Obtener Seccion by Id

function encontrarSeccionByID(req, res){
    var seccionId = req.params.id;

    Seccion.findById(seccionId,(err,seccionesEncontradas)=>{
        if(err){
            res.status(500).send({message:"Error del servidor"});
          } else {
              if(!seccionesEncontradas){
                res.status(200).send({message:"No fue posible obtener el registro de seccion"});
              } else {
                res.status(200).send({
                    status:"Secciones Encontradas",
                    seccion: seccionesEncontradas
                });
              }
          }
    
      });
  }


//Actualizar  Seccion

function actualizarSeccion(req, res){
    var seccionId = req.params.id;
    var nuevosDatosSeccion = req.body;

    Seccion.findByIdAndUpdate(seccionId,nuevosDatosSeccion,(err,seccionActualizada )=>{
      if(err){
          res.status(500).send({message:"Error del servidor"});
        } else {
            if(!seccionActualizada){
              res.status(200).send({message:"No fue posible actualizar el registro de seccion"});
            } else {
              res.status(200).send({
                  status:"Seccion Actualizada",
                  seccion: seccionActualizada
              });
            }
        }
  
    });
  }

//Eliminar Seccion

function eliminarSeccion(req, res){
    var seccionId = req.params.id;

    Seccion.findByIdAndDelete(seccionId,(err,seccionEliminada)=>{
      if(err){
          res.status(500).send({message:"Error del servidor"});
        } else {
            if(!seccionEliminada){
              res.status(404).send({message:"No fue posible actualizar el registro de seccion"});
            } else {
              res.status(200).send({
                  status:"Seccion Eliminada",
                  seccion: seccionEliminada
              });
            }
        }
  
    });
  }

function encontrarSeccionByName(req, res){

  console.log("Seccs", req.params);
    var name = new RegExp(`.*${req.params.name}.*`,'i');
    Seccion.find({nombre:name},(err,seccionesEncontradas)=>{
        if(err){
            res.status(500).send({message:"Error del servidor"});
          } else {
              if(!seccionesEncontradas){
                res.status(200).send({message:"No fue posible obtener el registro de seccion"});
              } else {
                res.status(200).send({
                    status:"Secciones Encontradas",
                    seccion: seccionesEncontradas
                });
              }
          }
    
      });
}
//Exportamos las funciones

module.exports = {
    crearSeccion,
    obtenerSeccion,
    actualizarSeccion,
    eliminarSeccion,
    encontrarSeccionByID,
    encontrarSeccionByName

}