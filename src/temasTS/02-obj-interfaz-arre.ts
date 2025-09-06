interface Alumno{
    nombre:string;
    apellido:string;
    edad:number;
    email:string;
    calificacion?:number;
}

const  alumno:Alumno={
    nombre: "Alan",
    apellido: "Villalpando",
    edad: 22,
    email: "avillalpando@gamil.com"
}
console.table(alumno);

let mascotas = ['Perro', 'Gato', 'Perico'];
mascotas[1]= 'nuevo Gato';
mascotas.push('Leon');
console.log(mascotas);

let tem:(number|string)[] = [];

tem.push(11);
tem.push('once');
console.log(tem);