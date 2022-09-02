"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const frutas_1 = require("./classes/frutas");
const frutas = ['manzana', 'pera', 'uva', 'sandia', 'melon', 'piña', 'naranja', 'mandarina', 'platano', 'fresa', 'mango', 'papaya', 'durazno', 'cereza', 'limon', 'pomelo', 'guayaba', 'granada', 'kiwi', 'naranjilla', 'tamarindo', 'mamey', 'chirimoya', 'aguacate', 'coco', 'papaya', 'mora', 'frambuesa', 'arandano', 'moras', 'pina', 'cereza', 'ciruela', 'higo', 'granadilla', 'guanabana', 'guayaba', 'lima', 'limon'];
const buscarFruta = new frutas_1.FrutasFiltrado(frutas);
console.log(buscarFruta.filtrarFrutas('manzana'));
