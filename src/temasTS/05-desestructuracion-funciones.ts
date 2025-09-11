export interface Producto{
    desc:string,
    precio:number
}
const telefono:Producto={
    desc:"Nokia",
    precio:1500
}
const tablet:Producto={
    desc:"Ipad",
    precio:3500
}
function calcularISV(productos:Producto[]):number{
    let total = 0;
    for (const producto of productos) {
        total += producto.precio;
        
    }
    return total*0.15;
}

export function calcularISV2(productos:Producto[]):[number, number]{
    let total = 0;
    for (const producto of productos) {
        total += producto.precio;
        
    }
    return [total,total*0.15];
}

const articulos = [telefono, tablet];
const isv = calcularISV(articulos);
console.log("ISV: ", isv)