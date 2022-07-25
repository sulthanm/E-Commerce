import classes from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import Books from "./components/Books/Books";
import BookDetail from "./components/Books/BookDetail/BookDetail";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";
function App() {
  return (
    <div className={classes.App}>
      <header>
        <Routes>
          <Route path="/home" exact element={<Books />}></Route>
          <Route path="/home/book/:id" exact element={<BookDetail />}></Route>
          <Route path="/cart" exact element={<Cart />}></Route>
          <Route path="/checkout" exact element={<Checkout />}></Route>
          <Route path="/orders" exact element={<Orders />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
