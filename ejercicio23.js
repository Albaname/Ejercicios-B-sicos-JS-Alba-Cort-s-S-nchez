//23
const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Chistmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },
    { name: "The Matrix", durationInMinutes: 136 },
    { name: "Amelie", durationInMinutes: 110 },
    { name: "Ethernal Sunshine of the Spotless Mind", durationInMinutes: 108},
];

const smallMovies = [];
const mediumMovies = [];
const largeMovies = [];

for (const movie of movies) {
    if (movie.durationInMinutes < 100) {
        smallMovies.push(movie);
    } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
        mediumMovies.push(movie);
    } else {
        largeMovies.push(movie);
    }
}

console.log("Peliculas pequeñas:");
console.log(smallMovies);

console.log("\nPeliculas medianas:");
console.log(mediumMovies);

console.log("\nPeliculas grandes:");
console.log(largeMovies);