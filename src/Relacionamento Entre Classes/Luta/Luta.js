"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Luta = void 0;
var Luta = /** @class */ (function () {
    function Luta() {
    }
    ;
    Luta.prototype.setDesafiado = function (desafiado) {
        this.desafiado = desafiado;
    };
    Luta.prototype.getDesafiado = function () {
        return this.desafiado;
    };
    Luta.prototype.setDesafiante = function (desafiante) {
        this.desafiante = desafiante;
    };
    Luta.prototype.getDesafiante = function () {
        return this.desafiante;
    };
    Luta.prototype.marcarLuta = function (lutador1, lutador2) {
        if (lutador1.getCategoria() === lutador2.getCategoria() && lutador1 != lutador2) {
            this.aprovada = true;
            this.desafiado = lutador1;
            this.desafiante = lutador2;
            console.log('Luta Aprovada!');
            console.log('========================');
        }
        else {
            this.aprovada = false;
            this.desafiado = null;
            this.desafiante = null;
            console.log('ERRO! Luta Não foi Aprovada!');
            console.log('========================');
        }
    };
    ;
    Luta.prototype.lutar = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (this.aprovada) {
            (_a = this.desafiado) === null || _a === void 0 ? void 0 : _a.apresentar();
            console.log('========================');
            (_b = this.desafiante) === null || _b === void 0 ? void 0 : _b.apresentar();
            console.log('========================');
            var vencedor = Math.floor(Math.random() * 3);
            switch (vencedor) {
                case 0: {
                    console.log("Empate");
                    console.log('========================');
                    (_c = this.desafiado) === null || _c === void 0 ? void 0 : _c.empatarLuta();
                    (_d = this.desafiante) === null || _d === void 0 ? void 0 : _d.empatarLuta();
                    break;
                }
                case 1: {
                    console.log((_e = this.desafiado) === null || _e === void 0 ? void 0 : _e.getNome(), "Ganhou a Luta");
                    console.log('========================');
                    (_f = this.desafiado) === null || _f === void 0 ? void 0 : _f.ganharLuta();
                    (_g = this.desafiante) === null || _g === void 0 ? void 0 : _g.perderLuta();
                    break;
                }
                case 2: {
                    console.log((_h = this.desafiante) === null || _h === void 0 ? void 0 : _h.getNome(), "Ganhou a Luta");
                    console.log('========================');
                    (_j = this.desafiante) === null || _j === void 0 ? void 0 : _j.ganharLuta();
                    (_k = this.desafiado) === null || _k === void 0 ? void 0 : _k.perderLuta();
                    break;
                }
            }
        }
        else {
            console.log('A luta não pode acontecer');
        }
    };
    ;
    return Luta;
}());
exports.Luta = Luta;
