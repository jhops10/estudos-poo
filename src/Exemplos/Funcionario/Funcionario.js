"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, idade, pcd) {
        this.setNome(nome);
        this.setIdade(idade);
        this.setPcd(pcd);
    }
    Funcionario.prototype.getStatus = function () {
        console.log('Nome:', this.getNome());
        console.log('Idade:', this.getIdade());
        console.log('PCD?:', this.getPcd());
    };
    Funcionario.prototype.getNome = function () {
        return this.nome;
    };
    Funcionario.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Funcionario.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    Funcionario.prototype.getIdade = function () {
        return this.idade;
    };
    Funcionario.prototype.setPcd = function (pcd) {
        this.pcd = pcd;
    };
    Funcionario.prototype.getPcd = function () {
        return this.pcd;
    };
    return Funcionario;
}());
exports.default = Funcionario;
