// Membuat Object
// Melakukan destructing object
const req = {
    body: {
        "name": "Evry Nazyli Ciptanto",
        "age": "23",
        "major": "Informatics"
    }
}

const { name, age, major } = req.body;
console.log(name, age, major);


// Melakukan destructing array
const family = ["Evry","Nazyli","Ciptanto"];
const [satu, dua, tiga] = family;

console.log(satu, dua, tiga);