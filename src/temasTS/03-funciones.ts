function sum(a:number, b:number):number
{
    return a + b;
}
const res = sum(4,6);
console.log(res);

function multiplicar(n1:number, n2?:number, base:number=6):number
{
    return n1 * base;
}
console.log(multiplicar(3));
console.log(multiplicar(3,5));
console.log(multiplicar(3,3,4));

////////////////////////Funciones Tipo Flecha ///////////////////

const addNumberArrow = (a:number, b:number):string=>{return `${a+b}`}