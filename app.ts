import { FrutasFiltrado } from "./classes/frutas";

const frutas: string[] = ['manzana', 'pera', 'uva', 'sandia', 'melon', 'piña', 'naranja', 'mandarina', 'platano', 'fresa', 'mango', 'papaya', 'durazno', 'cereza', 'limon', 'pomelo', 'guayaba', 'granada', 'kiwi', 'naranjilla', 'tamarindo', 'mamey', 'chirimoya', 'aguacate', 'coco', 'papaya', 'mora', 'frambuesa', 'arandano', 'moras', 'pina', 'cereza', 'ciruela', 'higo', 'granadilla', 'guanabana', 'guayaba', 'lima', 'limon']

const buscarFruta = new FrutasFiltrado(frutas);

console.log(buscarFruta.filtrarFrutas('manzana'));

