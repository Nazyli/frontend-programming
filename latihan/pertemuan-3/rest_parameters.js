// Without rest parameter
function sum(a, b, c, d, e, f, g) {
    const hasil = a + b + c + d + e + f + g;
    return hasil;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7));

// With rest parameter
function sumRest(...numbers) {
    let hasil = 0;
    for (const number of numbers) {
        hasil += number;
    }
    return hasil;
}
console.log(sumRest(1 + 2 + 3 + 4 + 5 + 6 + 7));


// Whitout Spread
const families = ["Evry", "Nazyli"];
const newfamilies = [families[0], families[1], "Ciptanto"];
console.log(newfamilies);


// With Spread
const families1 = ["Evry", "Nazyli"];
const newfamilies1 = [...families1, "Ciptanto"];
console.log(newfamilies1);



// Without Spread
const user = {
    "name": "Evry Nazyli Ciptanto",
    "age": "23"
};
const newUser = {
    "name":user.name,
    "age":user.age,
    "major": "Informatics"
}
console.log(newUser);

// With Spread
const user1 = {
    "name": "Evry Nazyli Ciptanto",
    "age": "23"
};
const newUser1 = {
    ...user,
    "major": "Informatics"
}
console.log(newUser1);