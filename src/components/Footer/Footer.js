import style from "./Footer.module.css"

function Footer(){
    return (
        <div className={style.container}>
            <footer className={style.footer}>
                <h2 className={style.footer__title}>Movie App</h2>
                <p className={style.footer_author}>Created by Evry Nazyli</p>
            </footer>
        </div>
    );
};

export default Footer;