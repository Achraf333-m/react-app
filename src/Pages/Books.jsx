import Book from "../components/ui/Book";
import React, { useState } from "react";

function Books({ books: initialBooks }) {

    const [books, setBooks] = useState(initialBooks)

   function filterBooks(event) {
    const filter = event.target.value;
        console.log(filter)
        if (filter === "HIGH-TO-LOW") {
            const HtL = books.slice().sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice))
            setBooks(HtL)
        }
        if (filter === "LOW-TO-HIGH") {
            const LtH = books.slice().sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice))
            setBooks(LtH)
        }
        if (filter === "RATING") {
            const rating = books.slice().sort((a, b) => b.rating - a.rating)
            setBooks(rating)
        }
    }
  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All books
                </h2>
                <select id="filter" defaultValue="default" onChange={filterBooks}>
                  <option value="default" disabled>
                    sort
                  </option>
                  <option value="LOW-TO-HIGH">Price, low to high</option>
                  <option value="HIGH-TO-LOW">Price, high to low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">
                {
                    books.map((book) => (
                        <Book key={book.id} book={book} />
                    ))
                }
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Books;
