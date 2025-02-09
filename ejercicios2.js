//1.1
const jedi = { nombre: "Luke Skywalker" , edad: 19 };
//Cambiar la edad
jedi["edad"] = 25;

//1.2
const nombre = "Leia";
const apellido = "Organa";
const edad = 20;

//Mensaje por consola
console.log("Soy  " + nombre + " " + apellido + " , tengo " + edad + " años y soy una princesa de Alderaan.");

//1.3
const sable1 = {nobre: "Shoto de Yoda" , precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader" , precio: 2000};

//Precio total de los dos sables
const precioTotal = sable1.precio + sable2.precio;

//Resultado por consola
console.log("El precio total de los dos sables es: " + precioTotal);

//1.4
let precioBaseGlobal = 10000;

//Modifica el valor
precioBaseGlobal = 25000;

const nave1 = {nobre: "Ala-X" , precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario" , precioBase: 70000, precioFinal: 80000};

//Actualizar precio final
nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave1.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log("Nave 1: " + nave1.nombre + " - Precio final: " + nave1.precioFinal);
console.log("Nave 2: " + nave2.nombre + " - Precio final: " + nave2.precioFinal);
