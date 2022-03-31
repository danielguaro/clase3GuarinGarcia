const sum = () => {
	const num1 = parseFloat(prompt('Ingresa el primer número a sumar: '));
	const num2 = parseFloat(prompt('Ingresa el segundo número a sumar: '));
	const answer = num1 + num2;
	alert(`El resultado de sumar ${num1} + ${num2} es = ${answer}`);
};

let play = true;
while (play) {
	sum();
	let question = prompt('Desea seguir jugando? (si / no)').toLowerCase();
	if (question == 'no') {
		play = false;
		alert('Gracias por jugar');
	} else if (question != 'si') {
		alert(
			'Recuerda que debes ingresar solo si o no, mientrastanto el juego continua'
		);
	}
}
