"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControleRemoto = void 0;
var ControleRemoto = /** @class */ (function () {
    function ControleRemoto() {
        this.volume = 50;
        this.ligado = false;
        this.tocando = false;
    }
    ControleRemoto.prototype.getVolume = function () {
        return this.volume;
    };
    ControleRemoto.prototype.setVolume = function (volume) {
        this.volume += volume;
    };
    ControleRemoto.prototype.getLigado = function () {
        return this.ligado;
    };
    ControleRemoto.prototype.setLigado = function (ligado) {
        this.ligado = ligado;
    };
    ControleRemoto.prototype.getTocando = function () {
        return this.tocando;
    };
    ControleRemoto.prototype.setTocando = function (tocando) {
        this.tocando = tocando;
    };
    ControleRemoto.prototype.ligar = function () {
        this.setLigado(true);
    };
    ControleRemoto.prototype.desligar = function () {
        this.setLigado(false);
    };
    ControleRemoto.prototype.abrirMenu = function () {
        if (this.getLigado()) {
            console.log('-----MENU-----');
            console.log(this.getLigado());
            console.log(this.getVolume());
            console.log(this.getTocando());
        }
        else {
            console.log('Controle Desligado');
        }
    };
    ControleRemoto.prototype.fecharMenu = function () {
        console.log('Menu Desligado');
    };
    ControleRemoto.prototype.maisVolume = function () {
        if (this.getLigado()) {
            this.setVolume(10);
        }
    };
    ControleRemoto.prototype.menosVOlume = function () {
        if (this.getLigado() && this.volume > 10) {
            this.setVolume(-10);
        }
        else {
            console.log('Você já está no volume mínimo.');
        }
    };
    ControleRemoto.prototype.ligarMudo = function () {
        this.volume = 0;
    };
    ControleRemoto.prototype.desligarMudo = function () {
        this.setVolume(50);
    };
    ControleRemoto.prototype.play = function () {
        if (!this.getTocando()) {
            this.setTocando(true);
        }
        else {
            console.log('Você já está tocando.');
        }
    };
    ControleRemoto.prototype.pause = function () {
        if (this.getTocando()) {
            this.setTocando(false);
        }
        else {
            console.log('Nada Tocando no momento.');
        }
    };
    return ControleRemoto;
}());
exports.ControleRemoto = ControleRemoto;
