"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Conta = /** @class */ (function () {
    function Conta(saldo, status) {
        if (saldo === void 0) { saldo = 0; }
        if (status === void 0) { status = false; }
        this.saldo = saldo;
        this.status = status;
    }
    // Setters e Getters
    Conta.prototype.setNumConta = function (num) {
        this.numConta = num;
    };
    Conta.prototype.getNumConta = function () {
        return this.numConta;
    };
    Conta.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Conta.prototype.getTipo = function () {
        return this.tipo;
    };
    Conta.prototype.setDono = function (dono) {
        this.dono = dono;
    };
    Conta.prototype.getDono = function () {
        return this.dono;
    };
    Conta.prototype.setSaldo = function (value) {
        this.saldo += value;
    };
    Conta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.abrirConta = function (tipo) {
        this.setTipo(tipo);
        this.status = true;
        if (this.tipo === 'CC') {
            this.saldo = 50;
        }
        else if (this.tipo === 'CP') {
            this.saldo = 150;
        }
    };
    Conta.prototype.fecharConta = function () {
        if (this.saldo > 0) {
            console.log('Você não pode fechar a conta com saldo positivo.');
        }
        else if (this.saldo < 0) {
            console.log('Você não pode fechar a conta com saldo negativo.');
        }
        else {
            this.status = false;
            console.log('Você fechou a sua conta');
        }
    };
    Conta.prototype.depositar = function (value) {
        if (this.status === true) {
            this.saldo += value;
        }
        else {
            console.log('Não foi possível depositar na sua conta.');
        }
    };
    Conta.prototype.sacar = function (value) {
        if (this.saldo >= value && this.status) {
            this.saldo -= value;
        }
        else {
            console.log('Você não tem saldo suficiente ou sua conta não está aberta.');
        }
    };
    Conta.prototype.pagarMensal = function () {
        var valor;
        if (this.tipo === 'CC') {
            valor = 12;
        }
        else {
            valor = 20;
        }
        if (this.status && this.saldo >= valor) {
            this.saldo -= valor;
        }
        else {
            console.log('Saldo insuficiente para pagar a mensalidade.');
        }
    };
    return Conta;
}());
exports.default = Conta;
