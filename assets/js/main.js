//console.log('it works');


//classe Veicolo 
class Veicolo {

    marca;
    anno;
    colore;
    porte;

    constructor (marca, anno, colore, porte = automobile){
        this.marca = marca
        this.anno = anno
        this.colore = colore
        this.porte = porte
    }

    getFullName(){
        return this.marca + ' ' + this.anno+ ' '+this.colore+' '+this.porte
    }

}

const panda = new Veicolo ('fiat', 2019, 'blu', 3);


console.log(panda.getFullName());

