/*
Haciendo uso de html, css (boostrap) y javascript, se requiere crea una web que pida al
usuario un valor del 1 al 10. Dependiendo del valor que el usuario proporcione (de
manera escrita), generar la tabla del multiplicar de dicho valor hasta el número 12.
Mostrar en la web dicha tabla con una buena apariencia, usando un ModalBox. 


*/

const btnEnviar = document.querySelector("#btn-enviar");
const valor = document.querySelector("#valor");
const tabla = document.querySelector("#tabla");

// verificar si ya habia valores

btnEnviar.addEventListener("click", () => {
	tabla.innerHTML = "";
	// Guarda el valor del input
	const valorOriginal = +valor.value;
	const arr = [];

	//eliminar datos anteriores

	// hace la tabla de multiplicacion
	for (let i = 0; i < 12; i++) {
		const numeroParaMultiplicar = i + 1;
		const resultado = valorOriginal * numeroParaMultiplicar;
		arr.push(
			`<tr ><td>${valorOriginal} x ${numeroParaMultiplicar}
     </td><td> ${resultado}</td></tr>  `
		);
	}

	// Inserta los datos en un elemento html
	for (let i = 0; i < arr.length; i++) {
		tabla.insertAdjacentHTML("beforeend", arr[i]);
	}
});
