"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, sexo) {
        this.setNome(nome);
        this.setIdade(idade);
        this.setSexo(sexo);
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Pessoa.prototype.getIdade = function () {
        return this.idade;
    };
    Pessoa.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    Pessoa.prototype.getSexo = function () {
        return this.sexo;
    };
    Pessoa.prototype.setSexo = function (sexo) {
        this.sexo = sexo;
    };
    Pessoa.prototype.fazerAniver = function () {
        console.log('Parabéns!! É o seu aniversário!!');
        this.setIdade(this.getIdade() + 1);
        console.log('Agora você tem:', this.getIdade(), 'anos');
    };
    return Pessoa;
}());
exports.default = Pessoa;
