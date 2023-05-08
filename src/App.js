import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./Pages/Books";
import { books } from "./data";
import Bookinfo from "./Pages/Bookinfo";
import Cart from "./Pages/Cart";
import React, { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([])

  function checkOut(book) {
    setCart([...cart, {...book, quantity: 1}])
  }
  
  
  function changeQuantity(book, quantity) {
    setCart(cart.map((item) => 
      item.title === book.title 
      ?
        {
          ...item,
          quantity: +quantity
        }
      : item
      
    ))
  }
  function quantityBook() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity
    })
    return counter
  }
  function removeBook(book) {
    setCart(cart.filter(item => item.title !== book.title))
  }



  return (
   <Router>
   <div className="App">
      <Nav quantityBook={quantityBook()} cart={cart}/>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/books" exact render={()=> <Books books={books} />}/>
      <Route path="/books/:title"  render={() => <Bookinfo books={books} checkout={checkOut} cart={cart} />}/>
      <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeBook={removeBook} />} />
      <Footer />
   </div>
   </Router>
  );
}

export default App;
