class Persona{
    nombre:string;
    edad:number;
    constructor(nombre:string,edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir(){
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`)
    }
}

let persona : Persona;
persona = new Persona('Alan', 22);
persona.imprimir();