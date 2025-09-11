interface Reproductor{
    volumen:number,
    segundo:number,
    cancion:string,
    detalles:Detalles
}
interface Detalles{
    autor:string,
    año:number
}

const reproductor:Reproductor={
    volumen:90,
    segundo:25,
    cancion:"mess",
    detalles:{
        autor:"Ed Sheeran",
        año:2015
    }
}
console.log("el Volumen actual es: ", reproductor.volumen)
console.log("el segundo actual es: ", reproductor.segundo)
console.log("el cancion actual es: ", reproductor.cancion)
console.log("el autor es: ", reproductor.detalles.autor)
console.log("el año es: ", reproductor.detalles.año)
//desestructuracion
const {volumen, segundo, cancion,detalles} = reproductor;
const {autor, año} = detalles;
console.log("el Volumen actual es: ", volumen)
console.log("el segundo actual es: ", segundo)
console.log("el cancion actual es: ", cancion)
console.log("el autor es: ", autor)
console.log("el año es: ", año)



// Desestructuracion de arreglos
const dbz:string[]=["Goku","Vegeta","Trunks"];
const [p1,p2,p3]=dbz;
console.log("personaje 1: ", p1)
console.log("personaje 2: ", p2)
console.log("personaje 3: ", p3)


