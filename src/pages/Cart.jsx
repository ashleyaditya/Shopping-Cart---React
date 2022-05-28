import React, { useContext } from "react";
import Card from "../component/Card";
import Navbar from "../component/Navbar";
import { CartProvider } from "../utils/CartContext";

const Cart = () => {
  const { cart, removeProduct } = useContext(CartProvider);
  const handleremoveClick = ({ id }) => {
    removeProduct(id);
  };
  return (
    <>
      <Navbar />
      {cart.length ? (
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {cart.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              price={product.price}
              btn="Remove Product"
              handleFunction={handleremoveClick}
            />
          ))}
        </div>
      ) : (
        <h1>Cart is empty</h1>
      )}
    </>
  );
};

export default Cart;
