function validar() {
  let error = document.getElementById("error");
  if (
    validarNombre() &&
    validarApellido() &&
    validarEdad() &&
    validarContrasena() &&
    validarDireccion() &&
    validarEstudios() &&
    validarPoliticas()
  ) {
  } else {
    error.style.display = "block";
    return false;
  }
}
//
function validarNombre() {
  let nombre = document.getElementById("nombre");
  if (nombre.length < 2) {
    return false;
  } else {
    return true;
  }
}
function validarApellido() {
  let apellido = document.getElementById("apellido");
  if (apellido.length < 10) {
    return false;
  } else {
    return true;
  }
}
function validarDireccion() {
  let direccion = document.getElementById("direccion");
  if (direccion.length < 4) {
    return false;
  } else {
    return true;
  }
}
function validarEdad() {
  let edad = document.getElementById("edad").value;
  if (edad < 18) {
    return false;
  } else {
    return true;
  }
}
function validarPoliticas() {
  return document.getElementById("acepto").checked;
}
function validarEstudios() {
  let seleccion = document.getElementById("estudios").value;
  if (seleccion === "") {
    return false;
  } else {
    return true;
  }
}

function validarContrasena() {
  let contrasenaOriginal = document.getElementById("contrasena1").value;
  let contrasenaVerificada = document.getElementById("contrasena2").value;
  let errorPswd = document.getElementById("errorPswd");

  if (contrasenaOriginal.length < 8) {
    errorPswd.style.display = "block";
    return false;
  } else if (contrasenaOriginal === contrasenaVerificada) {
    errorPswd.style.display = "none"; // Ocultar el mensaje de error si las contraseñas no coinciden
    return true;
  } else {
    errorPswd.style.display = "block"; // Ocultar el mensaje de error si las contraseñas coinciden
    return false;
  }
}
