//console.log('it works');


//classe Veicolo 
class Veicolo {

    marca;
    anno;
    colore;
    porte;
    carburante;

    constructor (marca, anno, colore, porte, carburante = 'veicolo'){
        this.marca = marca
        this.anno = anno
        this.colore = colore
        this.porte = porte
        this.carburante = carburante 
    }

    getInformation(){
        return this.marca + ' ' + this.anno+ ' '+this.colore+' '+this.porte+ ' '+this.carburante
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

