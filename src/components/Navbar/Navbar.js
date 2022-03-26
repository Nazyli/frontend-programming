import style from "./Navbar.module.css"
function Navbar() {
    return (
        <div className={style.container}>
            <nav className={style.navbar}>
                <div>
                    <h1 className={style.navbar__brand}>Movie App</h1>
                </div>
                <div>
                    <ul className={style.navbar__list}>
                        <li className={style.navbar__item}>Home</li>
                        <li className={style.navbar__item}>Add Movie</li>
                        <li className={style.navbar__item}>Popular</li>
                        <li className={style.navbar__item}>New Playing</li>
                        <li className={style.navbar__item}>Top Rate</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;