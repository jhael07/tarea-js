/*
Haciendo uso de html, css (boostrap) y javascript, se requiere crea una web que pida al
usuario un valor del 1 al 10. Dependiendo del valor que el usuario proporcione (de
manera escrita), generar la tabla del multiplicar de dicho valor hasta el número 12.
Mostrar en la web dicha tabla con una buena apariencia, usando un ModalBox. 


*/

const btnEnviar = document.querySelector("#btn-enviar"),
	valor = document.querySelector("#valor"),
	tabla = document.querySelector("#tabla");

btnEnviar.addEventListener("click", () => {
	//eliminar datos anteriores
	tabla.innerHTML = "";

	// Guarda el valor del input
	const valorOriginal = +valor.value;

	if (valorOriginal < 1 || valorOriginal > 10) {
		alert("El valor debe estar entre 1 y 10");
		return;
	}
	// hace la tabla de multiplicacion
	for (let i = 0; i < 12; i++) {
		const numeroParaMultiplicar = i + 1;
		const resultado = valorOriginal * numeroParaMultiplicar;
		const html = `<tr>
                  <td>${valorOriginal} x ${numeroParaMultiplicar}</td>
                  <td> ${resultado}</td>
                  </tr>`;

		tabla.insertAdjacentHTML("beforeend", html);
	}
});
