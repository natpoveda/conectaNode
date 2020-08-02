const Contactanos = require("../Modelo/contactanos");

// Crear Contactanos

function crearContactanos(req, res) {
  var contactanos = new Contactanos();
  var parametros = req.body;

  contactanos.email = parametros.email;
  contactanos.nombre = parametros.nombre;
  contactanos.asunto = parametros.asunto;
  contactanos.fecha = Date();
  

  contactanos.save((err,contactanosNuevo)=>{
      if(err){
        res.status(500).send({message:"Error del servidor"});
      } else {
          if(!contactanosNuevo){
            res.status(200).send({message:"No fue posible realizar el contactanos"});
          } else {
            res.status(200).send({
                status:"Contactanos Creado",
                contactanos: contactanosNuevo,
                codeStatus: 200
            });
          }
      }
      
  })
}

//Obtener Contactanoss

function obtenerContactanos(req, res){
  Contactanos.find((err,contactanosEncontrados)=>{
    if(err){
        res.status(500).send({message:"Error del servidor"});
      } else {
          if(!contactanosEncontrados){
            res.status(200).send({message:"No fue posible obtener el contactanos"});
          } else {
            res.status(200).send({
                status:"Contactanos Encontrado",
                contactanos: contactanosEncontrados
            });
          }
      }

  });
}


//Obtener Contactanos by Id

function encontrarContactanosByID(req, res){
  var contactanosId = req.params.id;

  Contactanos.findById(contactanosId,(err,contactanosEncontrados)=>{
      if(err){
          res.status(500).send({message:"Error del servidor"});
        } else {
            if(!contactanosEncontrados){
              res.status(200).send({message:"No fue posible obtener el registro de seccion"});
            } else {
              res.status(200).send({
                  status:"Contactanos Encontradas",
                  contactanos: contactanosEncontrados
              });
            }
        }
  
    });
}

//Eliminar Contactanos

function eliminarContactanos(req, res){
    var contactanosId = req.params.id;

    Contactanos.findByIdAndDelete(contactanosId,(err,contactanosEliminado)=>{
      if(err){
          res.status(500).send({message:"Error del servidor"});
        } else {
            if(!contactanosEliminado){
              res.status(404).send({message:"No fue posible actualizar el contactanos"});
            } else {
              res.status(200).send({
                  status:"Contactanos Eliminado",
                  contactanos: contactanosEliminado
              });
            }
        }
  
    });
  }


//Exportamos las funciones

module.exports = {
    crearContactanos,
    obtenerContactanos,
    eliminarContactanos,
    encontrarContactanosByID
}