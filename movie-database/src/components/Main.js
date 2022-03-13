import Hello from './Hello';

const Main = () => {
    // Mengirim Props  name
    const names = ["Evry Nazyli Ciptanto", "Brilian Ahmad Santosa", "Natalie Olivia Rose", "Rebecca Sally Tracey", "Una Yvonne Caroline"];
    const formatedName = names.map(function (name) {
        return <Hello name={name} />

    });
    return <main> {formatedName} </main >

};

export default Main;
