

export class FrutasFiltrado{

    constructor(
        public frutas: string[],
    ){
        this.frutas = frutas;
    }

    filtrarFrutas(frutaBuscada: string){
        return this.frutas.filter( fruta => fruta === frutaBuscada);
    }
}