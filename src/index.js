"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Conta_1 = require("./Conta/Conta");
// Exemplo 01
// let bic = new Caneta();
// bic.modelo = 'Bic Crystal';
// bic.cor = 'Azul';
// // bic.ponta = 0.5;
// // bic.carga = 100;
// // bic.tampada = true;
// console.log(bic.escrever());
// bic.destampar();
// bic.status();
// Exemplo 02
// let funcionario = new Funcionario('João Paulo', 33, false);
// funcionario.getStatus();
// Exemplo 03
var contaJoao = new Conta_1.default();
contaJoao.setDono('João Paulo');
contaJoao.setNumConta(123456);
contaJoao.abrirConta('CC');
contaJoao.pagarMensal();
console.log(contaJoao);
