class Persona3{
    protected nombre:string;
    protected edad:number;
    protected direccion:string;
    constructor(nombre:string,edad:number, direccion:string){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }
    mostrarpersona(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Direccion: ${this.direccion}`);
    }
}

class Empleados extends Persona3{
    private salarios:number;
    constructor(nombre:string, edad:number, direccion:string, salarios:number){
        super(nombre, edad, direccion);
        this.salarios = salarios;
    }
    imprimir(){
        if (this.salarios>5000) {
            console.log(`${this.nombre} debe de pagar impuestos`)
        }
        else
            console.log(`${this.nombre} no debe de pagar impuestos`)

    }
}

const persona3=new Persona3('Juan', 33, 'Veracruz 324');
persona3.mostrarpersona();

const empleado=new Empleados('Juan', 44, 'Veracruz 324', 7000);
empleado.imprimir();