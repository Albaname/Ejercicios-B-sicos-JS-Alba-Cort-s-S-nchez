//22
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
    { name: "Heura", isVegan: true},
    { name: "Salmon", isVegan: false},
    { name: "Tofu", isVegan: true},
    { name: "Burguer", isVegan: false},
    { name: "Rice", isVegan: true},
    { name: "Pasta", isVegan: true},
];

let fruitIndex = 0;

for (let i = 0; i < foodSchedule.length; i++) {
    if (!foodSchedule[i].isVegan) {
        if (fruitIndex < fruits.length) {
            foodSchedule[i].name = fruits[fruitIndex];
            foodSchedule[i].isVegan = true;
            fruitIndex++;
        } else {
            console.log("No hay bastantes frutas para reemplazar todas las comidas no veganas.");
            break;
        }
    }
}

console.log(foodSchedule);