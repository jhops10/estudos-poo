"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lutador = /** @class */ (function () {
    function Lutador(nome, nacionalidade, altura, peso, vitorias, derrotas, empates) {
        this.setNome(nome);
        this.setNacionalidade(nacionalidade);
        this.setAltura(altura);
        this.setPeso(peso);
        this.setVitorias(vitorias);
        this.setDerrotas(derrotas);
        this.setEmpates(empates);
    }
    Lutador.prototype.getNome = function () {
        return this.nome;
    };
    Lutador.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Lutador.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Lutador.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Lutador.prototype.getAltura = function () {
        return this.altura;
    };
    Lutador.prototype.setAltura = function (altura) {
        this.altura = altura;
    };
    Lutador.prototype.getPeso = function () {
        return this.peso;
    };
    Lutador.prototype.setPeso = function (peso) {
        this.peso = peso;
        this.setCategoria();
    };
    Lutador.prototype.getCategoria = function () {
        return this.categoria;
    };
    Lutador.prototype.setCategoria = function () {
        if (this.getPeso() < 52.2) {
            this.categoria = 'Inválida';
        }
        else if (this.getPeso() <= 70.3) {
            this.categoria = 'Leve';
        }
        else if (this.getPeso() <= 83.9) {
            this.categoria = 'Médio';
        }
        else if (this.getPeso() <= 120.2) {
            this.categoria = 'Pesado';
        }
        else {
            this.categoria = 'Inválida';
        }
    };
    Lutador.prototype.getVitorias = function () {
        return this.vitorias;
    };
    Lutador.prototype.setVitorias = function (numVitorias) {
        this.vitorias = numVitorias;
    };
    Lutador.prototype.getDerrotas = function () {
        return this.derrotas;
    };
    Lutador.prototype.setDerrotas = function (numDerrotas) {
        this.derrotas = numDerrotas;
    };
    Lutador.prototype.getEmpates = function () {
        return this.empates;
    };
    Lutador.prototype.setEmpates = function (numEmpates) {
        this.empates = numEmpates;
    };
    //Métodos
    Lutador.prototype.apresentar = function () {
        console.log('Lutador:', this.getNome());
        console.log('Origem:', this.getNacionalidade());
        console.log('Altura:', this.getAltura());
        console.log('Pesando:', this.getPeso(), 'Kg');
        console.log('Ganhou:', this.getVitorias());
        console.log('Perdeu:', this.getDerrotas());
        console.log('Empatou:', this.getEmpates());
    };
    Lutador.prototype.status = function () {
        console.log(this.getNome());
        console.log('É um peso:', this.getCategoria());
        console.log(this.getVitorias(), 'Vitórias');
        console.log(this.getDerrotas(), 'Derrotas');
        console.log(this.getEmpates(), 'Empates');
    };
    Lutador.prototype.ganharLuta = function () {
        this.vitorias += 1;
    };
    Lutador.prototype.perderLuta = function () {
        this.derrotas += 1;
    };
    Lutador.prototype.empatarLuta = function () {
        this.empates += 1;
    };
    return Lutador;
}());
exports.default = Lutador;
