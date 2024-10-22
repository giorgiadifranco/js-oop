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

    getInformation(){
        return this.marca + ' ' + this.anno+ ' '+this.colore+' '+this.porte
    }

    calculateAge(){
        return 2024 - this.anno 
    }
}

const panda = new Veicolo ('fiat', 2019, 'blu', 3);


console.log(panda.getInformation());

console.log(panda.calculateAge());


//BONUS estendere la classe "Veicolo" con una nuova classe chiamata "Automobile"

class Automobile extends Veicolo{

    
    

    
}

