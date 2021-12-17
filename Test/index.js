let btn = document.getElementById('mbGuardar');
let zme = document.getElementById('ZonaMensajeError');
btn.addEventListener('click',procesarFormatulario );


function procesarFormatulario() { 
 let nombreCapa = document.getElementById('mbNombre');
 let protocoloCapa = document.getElementById('mbProtocolo');
 let urlCapa = document.getElementById('mbURL');
 let minZoomCapa = document.getElementById('mbZoomMin');
 let maxZoomCapa = document.getElementById('mbZoomMax');
 let bandera = 1;


 if (nombreCapa.value =='')
  {
    alerta('El Nombre de la capa es obligatorio', 'success');
    bandera=0;
  }
 if (protocoloCapa.value  =='')
  {
    alerta('El protocolo es obligatorio', 'success');  
    bandera=0;
  }
 if (urlCapa.value  =='')
  {
    alerta('La URL es obligatoria', 'success');  
    bandera=0;
  }
   
}

function alerta(mensaje, tipo) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + tipo + ' alert-dismissible" role="alert">' + mensaje + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    zme.append(wrapper)
  }