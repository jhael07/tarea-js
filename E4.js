const btnEnviar = document.querySelector("#btn-enviar");
const valor = document.querySelector("#valor");

btnEnviar.addEventListener("click", function () {
	alert(valor.value);
});
