import React from "react";
import LibraryLogo from "../assets/Library.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Nav = ({ quantityBook, cart }) => {
  function openMenu() {
    document.body.classList += " menu--open";
  }
  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={LibraryLogo} alt="" className="logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
            <Link to="/books" className="nav__link">
              Books
            </Link>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
          <li className="nav__icon">
            <Link to="/cart" className="nav__link">
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
            {cart.length > 0 ? (
              <span className="cart__length">{quantityBook}</span>
            ) : (
              ""
            )}
          </li>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <a href="/" className="menu__link">
                Home
              </a>
            </li>
            <li className="menu__list">
              <a href="/Books" className="menu__link">
                Books
              </a>
            </li>
            <li className="menu__list">
              <a href="/Cart" className="menu__link">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
