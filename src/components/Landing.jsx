import LibraryUndraw from "../assets/Undraw_Books.svg"

function Landing() {
    return (
        <section id="landing-page">
            <div className="header__container">
                <div className="header__description">
                    <h1>Welcome To The Largest Online Library in Canada</h1>
                    <h2>Find Your Dream Book with <span className="purple">Library</span></h2>
                    <a href="#features">
                    <button className="btn">Browse Books</button>
                    </a>
                </div>
                <div className="header__img--wrapper">
                    <img src={LibraryUndraw} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Landing