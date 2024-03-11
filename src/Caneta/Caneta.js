"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Caneta = /** @class */ (function () {
    function Caneta() {
        this.tampada = true;
    }
    Caneta.prototype.status = function () {
        console.log('Modelo:', this.modelo);
        console.log('Cor:', this.cor);
        console.log('Ponta:', this.ponta);
        console.log('Carga:', this.carga);
        console.log('Está Tampada?:', this.tampada);
    };
    Caneta.prototype.destampar = function () {
        this.tampada = false;
    };
    Caneta.prototype.tampar = function () {
        this.tampada = true;
    };
    Caneta.prototype.escrever = function () {
        if (this.tampada) {
            return 'Você não pode escrever, pois sua caneta esta tampada.';
        }
        else {
            return 'Você escreve uma linda frase e gasta 10% da carga de tinta.';
        }
    };
    Caneta.prototype.rabiscar = function () {
        if (this.tampada) {
            return 'Você não pode rabiscar, pois sua caneta esta tampada.';
        }
        else {
            return 'Você você faz um rabisco sem sentido e gasta 15% da carga de tinta.';
        }
    };
    Caneta.prototype.desenhar = function () {
        if (this.tampada) {
            return 'Você não pode desenhar, pois sua caneta esta tampada.';
        }
        else {
            return 'Você você faz um lindo desenho e gasta 20% da carga de tinta.';
        }
    };
    return Caneta;
}());
exports.default = Caneta;
