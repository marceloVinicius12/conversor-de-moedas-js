let valorEmDolarTexto = prompt("qual o valor em dolar voce quer converter?");
console.log( typeof valorEmDolarTexto);
//string = texto
let valorEmDolarNumero = parseFloat(valorEmDolarTexto);
console.log(typeof valorEmDolarNumero );
//float = número decimal 
//int = numero inteiro

alert(valorEmDolarNumero);

let valorEmReal = valorEmDolarNumero * 5.77;

let valorEmRealFixado = valorEmReal.toFixed(2); 
alert(valorEmRealFixado);

