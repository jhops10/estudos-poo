import Caneta from "./Caneta/Caneta";

let bic = new Caneta();

bic.modelo = 'Bic Crystal';
bic.cor = 'Azul';
// bic.ponta = 0.5;
// bic.carga = 100;
// bic.tampada = true;

console.log(bic.escrever());
bic.destampar();
bic.status();