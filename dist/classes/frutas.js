"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrutasFiltrado = void 0;
class FrutasFiltrado {
    constructor(frutas) {
        this.frutas = frutas;
        this.frutas = frutas;
    }
    filtrarFrutas(frutaBuscada) {
        return this.frutas.filter(fruta => fruta === frutaBuscada);
    }
}
exports.FrutasFiltrado = FrutasFiltrado;
