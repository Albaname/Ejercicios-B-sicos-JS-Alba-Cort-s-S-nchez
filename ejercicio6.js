//6.1  Crea un bucle for que vaya desde 0 al 9, muestra el valor
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//6.2 Crea un bucle for que vaya desde 0 a 9, muestra el valor i cuando el resto sea 0
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//6.3 Crea un bucle para conseguir dormir contando ovejas, tiene que dar 10 vueltas
for (let i = 1; i <= 10; i++) {
    if (i === 10){
        console.log('¡Dormido!');
    } else {
        console.log('Intentando dormir 🐑');
    }
}