function validar() {
  if (validarNombre()) {
  } else {
    return false;
  }
}
//
function validarNombre() {
  let nombre = document.getElementById("nombre").value;
  let errorNombre = document.getElementById("errorNombre");
  if (nombre.length < 2) {
    errorNombre.style.display = "block";
    return false;
  } else {
    return true;
  }
}

function mostrarCampoOculto() {
  var select = document.getElementById("asuntoSelect");
  var campoOculto = document.getElementById("hidden");
  //aquí se selecciona las opciones del campo select y
  //para saber cual esta seleccionado se usa
  //selectedIndex, eso equivalente a array[i]
  var opcionSeleccionada = select.options[select.selectedIndex];

  //si el id de i es igual a opcion3 haz:
  if (opcionSeleccionada.id === "opcion3") {
    campoOculto.style.display = "block";
  } else {
    campoOculto.style.display = "none";
  }
}
//se podría hacer con value
/*
 * function mostrarCampoOculto() {
 * var select = document.getElementById("asuntoSelect");
 * var campoOculto = document.getElementById("hidden");

 * if (select.value === "Estado de una solicitud") {
 *   campoOculto.style.display = "block";
 * } else {
 *   campoOculto.style.display = "none";
 * }
}
 */
