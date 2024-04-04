"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, totPaginas, leitor) {
        this.setTitulo(titulo);
        this.setAutor(autor);
        this.setTotPaginas(totPaginas);
        this.setLeitor(leitor);
        this.setAberto(false);
        this.setPagAtual(0);
    }
    Livro.prototype.abrir = function () {
        this.setAberto(true);
    };
    Livro.prototype.fechar = function () {
        this.setAberto(false);
    };
    Livro.prototype.folhear = function (pagina) {
        console.log('Você folheou o livro até a página', pagina);
        this.setPagAtual(pagina);
    };
    Livro.prototype.avancarPag = function () {
        this.setPagAtual(this.getPagAtual() + 1);
    };
    Livro.prototype.voltarPag = function () {
        this.setPagAtual(this.getPagAtual() - 1);
    };
    Livro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Livro.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Livro.prototype.getAutor = function () {
        return this.autor;
    };
    Livro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Livro.prototype.getTotPaginas = function () {
        return this.totPaginas;
    };
    Livro.prototype.setTotPaginas = function (totPaginas) {
        this.totPaginas = totPaginas;
    };
    Livro.prototype.getPagAtual = function () {
        return this.pagAtual;
    };
    Livro.prototype.setPagAtual = function (pagAtual) {
        this.pagAtual = pagAtual;
    };
    Livro.prototype.getAberto = function () {
        return this.aberto;
    };
    Livro.prototype.setAberto = function (aberto) {
        this.aberto = aberto;
    };
    Livro.prototype.getLeitor = function () {
        return this.leitor;
    };
    Livro.prototype.setLeitor = function (leitor) {
        this.leitor = leitor;
    };
    Livro.prototype.detalhes = function () {
        console.log('Você está lendo o livro:', this.getTitulo());
        console.log('Autor:', this.getAutor());
        console.log('Total de Páginas:', this.getTotPaginas());
        console.log('Você atualmente está lendo a página:', this.getPagAtual());
    };
    return Livro;
}());
exports.default = Livro;
