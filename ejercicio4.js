const aldeanos = ["Fibrilio" , "Narciso" , "Vacarena" , "Tendo" , "Nendo"];

//4.1 Saca a "Tendo" por consola
console.log("4.1 - Aldeano en la posicion 3: " + aldeanos[3]);

//4.2 Coloca en el último lugar a "Cervasio"
aldeanos.push("Cervasio");
console.log("4.2 - Array con 'Cervasio' al final: " + aldeanos);

//4.3 Cambia el primer elemento por "Bambina"
aldeanos[0] = "Bambina";
console.log("4.3 - Array con 'Bambina' al inicio: " + aldeanos);

//4.4 Dale la vuelta al array
aldeanos.reverse();
console.log("4.4 - Array invertido: " + aldeanos);

//4.5 Cambia a "Narciso" por "Canela"
const indiceNarciso = aldeanos.indexOf("Narciso");
if (indiceNarciso !== -1) {
    aldeanos[indiceNarciso] = "Canela";
}
console.log("4.5 - Array con 'Narciso' reemplazado por 'Canela': " + aldeanos);

//4.6 Imprime por consola el último elemento
console.log("4.6 - Último elemento del array: " + aldeanos[aldeanos.length - 1]);