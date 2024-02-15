function cambiarTexto() {
  campoTexto = document.getElementById("texto");
  campoTextoVacio = document.getElementById("textoVacio");

  campoTextoVacio.innerHTML = campoTexto.value;
}
function cambiarColorFondo() {
  campoColor = document.getElementById("colorFondo");
  divCambioColor = document.getElementById("color");

  var colorSeleccionado = campoColor.value;

  divCambioColor.style.backgroundColor = colorSeleccionado;
}
function cambiarColorBorde() {
  campoColorBorde = document.getElementById("colorBorde");
  divCambioColor = document.getElementById("color");

  var colorBordeSeleccionado = campoColorBorde.value;

  divCambioColor.style.borderColor = colorBordeSeleccionado;
}
function cambiarColorTexto() {
  campoColorTexto = document.getElementById("colorTexto");
  divCambioColor = document.getElementById("color");

  var colorTextoSeleccionado = campoColorTexto.value;

  divCambioColor.style.color = colorTextoSeleccionado;
}
