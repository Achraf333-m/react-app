import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";
import { useEffect, useRef, useState } from "react";

function Book({ book }) {
  const [img, setImg] = useState()

  const mountedImage = useRef(true)

  useEffect(() => {
    const image = new Image();
    image.src = book.url
    setTimeout(() => {
      if (mountedImage) {
        setImg(image)
      }
    }, 1300);
    return () => {
      mountedImage.current = false
    }
  })

  return (
    <div className="book">
      {img ? (
        <>
          <Link to={`/books/${book.webTitle}`} className="book__title--link">
            <figure className="book__img--wrapper">
              <img src={book.url} alt="" className="book__img" />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.webTitle}`} className="book__title--link">
              <h3>{book.title}</h3>
            </Link>
          </div>
          <Rating rating={book.rating} />
          <Price
            salePrice={book.salePrice}
            originalPrice={book.originalPrice}
          />
        </>
      ) : (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}
    </div>
  );
}

export default Book;
