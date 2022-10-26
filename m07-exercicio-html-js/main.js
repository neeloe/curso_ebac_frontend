const form = document.getElementById("formulario");
const containerMensagemPositiva = document.querySelector(".success-message");
const containerMensagemNegativa = document.querySelector(".error-message");

function validaCampoB(campoA, campoB) {
  return campoB > campoA;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const campoA = document.getElementById("campo-a");
  const campoB = document.getElementById("campo-b");
  const mensagemPositiva = `Sucesso: O campo B(${campoB.value}) é maior que o campo A(${campoA.value})`;
  const mensagemNegativa = `Erro: O campo B(${campoB.value}) deve ser maior que o campo A(${campoA.value})`;

  formEValido = validaCampoB(campoA.value, campoB.value);

  if (formEValido) {
    containerMensagemNegativa.style.display = "none";
    containerMensagemPositiva.innerHTML = mensagemPositiva;
    containerMensagemPositiva.style.display = "block";

    campoA.value = "";
    campoB.value = "";
  } else {
    containerMensagemPositiva.style.display = "none";
    containerMensagemNegativa.innerHTML = mensagemNegativa;
    containerMensagemNegativa.style.display = "block";

    campoA.value = "";
    campoB.value = "";
  }
});
