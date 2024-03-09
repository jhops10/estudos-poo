import Caneta from "./Caneta/Caneta.js";

const bic = new Caneta('Bic Crystal', 'Azul', 0.7, 100, true)


bic.rabiscar();
bic.escrever();
console.log('Carga atual da sua caneta: ', bic.carga);


bic.destampar();
bic.rabiscar();
bic.escrever();
console.log('Carga atual da sua caneta: ', bic.carga);