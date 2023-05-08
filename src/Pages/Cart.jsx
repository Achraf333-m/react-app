import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emptyCart from "../assets/empty_cart.svg";

function Cart({ cart, changeQuantity, removeBook }) {
  function total() {
    let price = 0;
    cart.forEach((item) => {
      price += +(
        item.quantity * (item.salePrice || item.originalPrice).toFixed(2)
      );
    });
    return price;
  }

  return (
    <section id="cart">
      <div className="container">
        <div className="row">
          <div className="cart__container">
            <Link to="/books" className="book__link">
              <FontAwesomeIcon icon="arrow-left" />
            </Link>
            <h2 className="cart__title">Cart</h2>

            <div className="cart__header">
              <h3 className="cart__header--title cart-header__book">Book</h3>
              <h3 className="cart__header--title cart-header__quantity">
                Quantity
              </h3>
              <h3 className="cart__header--title cart-header__price">Price</h3>
            </div>

            <div className="cart__items--container">
              {cart.map((book, index) => {
                return (
                  <div key={index} className="cart__container-item">
                    <div className="cart__book--container">
                      <figure className="cart__book">
                        <img
                          src={book.url}
                          alt=""
                          className="book__img cart__img"
                        />
                      </figure>
                      <div className="cart__book--info">
                        <h3 className="cart-book__detail">{book.title}</h3>
                        <div className="cart-book__detail">
                          ${(book.salePrice || book.originalPrice).toFixed(2)}
                        </div>
                        <button
                          type="button"
                          className="remove"
                          onClick={() => removeBook(book)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="cart__quantity">
                      <input
                        onChange={(event) =>
                          changeQuantity(book, event.target.value)
                        }
                        min={0}
                        max={30}
                        type="number"
                        pattern="\d*"
                        className="cart__input"
                        value={book.quantity}
                      />
                    </div>
                    <div className="cart__price">
                      <div className="price">
                        $
                        {(
                          book.quantity * (book.salePrice || book.originalPrice)
                        ).toFixed(2)}
                      </div>
                    </div>
                  </div>
                );
              })}
              {cart.length === 0 ? (
                <div className="cart__empty">
                  <img src={emptyCart} alt="" className="cart__empty--img" />
                  <h2>You don't have any books in your cart</h2>
                  <Link to="/books">
                    <button className="btn">Browse Books</button>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
            {cart.length > 0 ? (
              <div className="cart-total__container">
                <div className="cart__total">
                  <div className="cart-price">
                    <span className="cart-price--name">Subtotal:</span>
                    <span className="price">
                      ${total() ? total().toFixed(2) : total()}
                    </span>
                  </div>
                  <div className="cart-price">
                    <span className="cart-price--name">Tax:</span>
                    <span className="price">
                      $
                      {(
                        (total() ? total().toFixed(2) : total()) * 0.15
                      ).toFixed(2)}
                    </span>
                  </div>
                  <div className="cart-price">
                    <span className="cart-price--name">Total:</span>
                    <span className="price">
                      $
                      {(
                        (total() ? total().toFixed(2) : total()) * 1.15
                      ).toFixed(2)}
                    </span>
                  </div>
                  <button
                    className="cart__btn btn"
                    onClick={() => alert("haven't implemented this feature!")}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
