import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartContext from "./utils/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <CartContext>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </CartContext>
  );
}

export default App;
