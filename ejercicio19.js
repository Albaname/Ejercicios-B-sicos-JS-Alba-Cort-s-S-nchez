//19 Usa un bucle for...of para recorrer todos los juguetes
const toys = [
    {id: 5, name: 'Transformers'},
    {id: 11, name: 'Lego'},
    {id: 23, name: 'Hot Wheels'},
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactico'},
    {id:60, name: 'Nerf Blaster'},
    {id: 71, name: 'Silvanian Families - Familia gato'}
];

const toysWithoutCats = toys.filter(toys.name.includes('gato'));

console.log(toysWithoutCats);