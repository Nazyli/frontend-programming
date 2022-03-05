// Array menyediakan banyak method untuk mempermudah mengelola data.
// Methods:
// Menambah dan menghapus: push, pop, shift, unshift.
// Iterate (perulangan): forEach.
// Searching (mencari): find, filter.
// Transform (mengubah): map, reduce.

// Foreach
const names = ["Evry", "Nazyli", "Ciptanto"];

names.forEach(function (name) {
    console.log(`name : ${name}`)
});

// Map
const formatedName = names.map(function (name) {
    return `Mr/Mrs. : ${name}`;
});

console.log(formatedName);

// Membuat array of objects
// Find & Filter
let users = [
    {
        name: "Evry Nazyli Ciptanto",
        age: 23,
        major: "informatics"
    },
    {
        name: "Brilian Ahmad Santosa",
        age: 17,
        major: "informatics System"
    },
    {
        name: "Natalie Olivia Rose",
        age: 21,
        major: "English"
    },
    {
        name: "Rebecca Sally Tracey",
        age: 18,
        major: "Mathematics"
    },
    {
        name: "Una Yvonne Caroline",
        age: 25,
        major: "Big Data"
    }
];

//   find age > 20
//  Mencari 1 data
const findUser = users.find(function (user) {
    return user.age > 20;
});
console.log("Find", findUser);


//   filter age > 20
// Mencari semua data
const filterUser = users.filter(function (user) {
    return user.age > 20;
});
console.log("Filter", filterUser);

// Arrow Function 
// const filterUser = users.filter((user) => user.age > 20);
