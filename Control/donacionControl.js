const Donacion = require("../Modelo/donaciones");
//const { param } = require("../Server/app");

// Crear Donacion

function crearDonacion(req, res) {
  var donacion = new Donacion();
  var parametros = req.body;

  console.log("parametros",parametros);

  donacion.nombre = parametros.nombre;
  donacion.apellido = parametros.apellido;
  donacion.genero = parametros.genero;
  donacion.cedula = parametros.cedula;
  donacion.edad = parametros.edad;
  donacion.direccion = parametros.direccion;
  donacion.email = parametros.email;
  donacion.tel = parametros.tel;
  donacion.pais = parametros.pais;
  donacion.pid = parametros.pid;
  donacion.monto = parametros.monto;
  donacion.tipoPago = parametros.tipoPago;

  donacion.save((err,donacionNueva)=>{
      if(err){
        res.status(500).send({message:"Error del servidor"});
      } else {
          if(!donacionNueva){
            res.status(200).send({message:"No fue posible realizar el registro de donacion"});
          } else {
            res.status(200).send({
                status:"Donacion Creada",
                donacion: donacionNueva,
                codeStatus: 200
            });
          }
      }
      
  })
}

//Obtener Donacion

function obtenerDonacion(req, res){
  Donacion.find((err,donacionesEncontradas)=>{
    if(err){
        res.status(500).send({message:"Error del servidor"});
      } else {
          if(!donacionesEncontradas){
            res.status(200).send({message:"No fue posible obtener el registro de donacion"});
          } else {
            res.status(200).send({
                status:"Donaciones Encontradas",
                donacion: donacionesEncontradas
            });
          }
      }

  });
}

//Obtener Donacion by Id

function encontrarDonacionByID(req, res){
    var donacionId = req.params.id;

    Donacion.findById(donacionId,(err,donacionesEncontradas)=>{
        if(err){
            res.status(500).send({message:"Error del servidor"});
          } else {
              if(!donacionesEncontradas){
                res.status(200).send({message:"No fue posible obtener el registro de donacion"});
              } else {
                res.status(200).send({
                    status:"Donaciones Encontradas",
                    donacion: donacionesEncontradas
                });
              }
          }
    
      });
  }


//Actualizar  Donacion

function actualizarDonacion(req, res){
    var donacionId = req.params.id;
    var nuevosDatosDonacion = req.body;

    Donacion.findByIdAndUpdate(donacionId,nuevosDatosDonacion,(err,donacionActualizada )=>{
      if(err){
          res.status(500).send({message:"Error del servidor"});
        } else {
            if(!donacionActualizada){
              res.status(200).send({message:"No fue posible actualizar el registro de donacion"});
            } else {
              res.status(200).send({
                  status:"Donacion Actualizada",
                  donacion: donacionActualizada
              });
            }
        }
  
    });
  }

//Eliminar Donacion

function eliminarDonacion(req, res){
    var donacionId = req.params.id;

    Donacion.findByIdAndDelete(donacionId,(err,donacionEliminada)=>{
      if(err){
          res.status(500).send({message:"Error del servidor"});
        } else {
            if(!donacionEliminada){
              res.status(404).send({message:"No fue posible actualizar el registro de donacion"});
            } else {
              res.status(200).send({
                  status:"Donacion Eliminada",
                  donacion: donacionEliminada
              });
            }
        }
  
    });
  }


//Obtener Donacion
function obtenerDonacionbyProyect(req, res){
  
  var proyectoId = req.params.proyectoId;
  Donacion.find({pid: proyectoId},(err,donacionesEncontradas)=>{
    if(err){
        res.status(500).send({message:"Error del servidor"});
      } else {
          if(!donacionesEncontradas){
            res.status(200).send({message:"No fue posible obtener el registro de Donacion por proyecto", prId: proyectoId});
          } else {
            res.status(200).send({
                status:"Donaciones Encontradas",
                donacion: donacionesEncontradas,
                statusCode:200
            });
          }
      }

  });
}
//Exportamos las funciones

module.exports = {
    crearDonacion,
    obtenerDonacion,
    actualizarDonacion,
    eliminarDonacion,
    encontrarDonacionByID,
    obtenerDonacionbyProyect
}