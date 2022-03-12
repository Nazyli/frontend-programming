function Hello(props) {
    // diluar return adalah javascript biasa
    // const name = "Evry Nazyli Ciptanto";
    const { name } = props;

    // di dalam return adalah jsx
    return (
        <div className="hello">
            <h2>Hallo React</h2>
            <p>Saya {name} - Frontend Engineer</p>
        </div>
    );
}

// Component Header
function Header() {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

function Main() {
    // Mengirim Props  name
    const names = ["Evry", "Nazyli"];
    const formatedName = names.map(function (name) {
        return <Hello name={name} />

    });
    return (
        <main>
            {formatedName}
            <Hello name="Sabeta" />
            <Hello name="Wahyuni" />
        </main>
    );
}

function Footer() {
    return (
        <footer>
            <h3>Copyright @nazyli</h3>
            <p>Created by React.js</p>
        </footer>
    );
}

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

// Render Component
ReactDOM.render(<App />, document.getElementById("root"));