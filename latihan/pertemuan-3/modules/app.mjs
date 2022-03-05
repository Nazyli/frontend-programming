import { index, store } from "./controller.mjs";

const main = () => {
    const user = {
        "name": "Evry Nazyli Ciptanto",
        "age": "23",
        "major": "Informatics"
    };
    index();
    store(user);
    index();
}

 main();