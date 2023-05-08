import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import React from "react";
import Book from "../components/ui/Book";
import { useState } from "react";

function Bookinfo({ books, checkout, cart }) {
  const { title } = useParams();
  const book = books.find(book => book.webTitle === title );

  function addToCart(book) {
    checkout(book)
  }

  function bookOnCart() {
    return cart.find((book) => book.webTitle === title )

  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books/1" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src={book.url}
                  alt=""
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime quam corrupti, commodi, quis cupiditate molestiae
                    nihil possimus suscipit cum adipisci delectus voluptate
                    exercitationem doloremque veniam deserunt quod, est eaque
                    animi.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime quam corrupti, commodi, quis cupiditate molestiae
                    nihil possimus suscipit cum adipisci delectus voluptate
                    exercitationem doloremque veniam deserunt quod, est eaque
                    animi.
                  </p>
                  {bookOnCart() ? (
                    <Link to="/cart">  
                    <button className="btn">View Cart!</button>
                    </Link>
                  ) : (
                  <button onClick={() => addToCart(book)} className="btn">
                    Add to Cart
                  </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">
                  Recommended Books
              </h2>
            </div>
            <div className="books">
            {
              books
              .filter(book => book.rating === 5 && book.webTitle !== title)
              .map(book => <Book book={book} key={book.id} />)
              .slice(0,4)
            }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Bookinfo;
