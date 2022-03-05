import users from "./data.mjs";

const index = () => {
    console.log("GET ALL");
    users.forEach(function (user) {
        console.log(user);
    });

}
const store = (user) => {
    users.push(user);
}

export {index, store};