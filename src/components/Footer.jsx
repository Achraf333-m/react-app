import Logo from "../assets/Library.svg"

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <a href="/">
                    <figure className="footer__logo">
                        <img src={Logo} alt="" className="footer__logo--img" />
                    </figure>
                    </a>
                    <ul className="footer__links">
                        <li className="footer__list">
                            <a href="/" className="footer__link">Home</a>
                        </li>
                        <li className="footer__list">
                            <span href="/about" className="footer__link no-cursor">About</span>
                        </li>
                        <li className="footer__list">
                            <a href="/books" className="footer__link">Books</a>
                        </li>
                        <li className="footer__list">
                            <a href="/cart" className="footer__link">Cart</a>
                        </li>
                    </ul>
                    <div className="footer__copyright">
                        Copyright &copy; Library 2023
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer