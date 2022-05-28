import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PageNotFound from "./component/PageNotFound";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import CartContext from "./utils/CartContext";

function App() {
  return (
    <CartContext>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </CartContext>
  );
}

export default App;
