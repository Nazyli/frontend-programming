// object

const user = {
    name: "Evry Nazyli Ciptanto",
    age: 23,
    major: "Informatics",
};

console.log(user.name, user["age"]);

for (const key in user) {
    console.log(`${key} : ${user[key]}`);
}