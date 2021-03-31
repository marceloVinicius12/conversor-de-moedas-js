let valorEmDolarTexto = prompt("qual o valor em dolar voce quer converter?");
let valorEmDolarNumero = parseFloat(valorEmDolarTexto);
let valorEmReal = valorEmDolarNumero * 5.77 ;
let valorEmRealFixado = valorEmReal.toFixed(2); 
alert(valorEmRealFixado);

