// Arrays
const animals = ["Cat", "Dog", "Fish", "Bird"];

console.log(animals[0], animals[2]);

// Looping Arrays;
for (let i = 0; i < animals.length; i++){
    console.log(`Hewan ${animals[i]}`);
}
for (const animal of animals){
    console.log(`Hewan 2 ${animal}`);

}