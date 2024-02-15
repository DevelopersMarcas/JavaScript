function limpiarTexto1() {
  var text = document.getElementById("txt1");
  text.value = "";
}
function limpiarTexto2() {
  var text = document.getElementById("txt2");
  text.value = "";
}
function copiarTexto1() {
  var text1 = document.getElementById("txt1").value;
  var tex2 = document.getElementById("txt2");
  tex2.value = text1; // Asigna el valor de txt1 al valor de txt2
}

function copiarTexto2() {
  var text2 = document.getElementById("txt2").value;
  var tex1 = document.getElementById("txt1");
  tex1.value = text2; // Asigna el valor de txt2 al valor de txt1
}
