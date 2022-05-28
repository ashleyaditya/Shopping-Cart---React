import React, { useContext } from "react";
import Card from "../../components/Card";

import { CartProvider } from "../../utils/CartContext";

const Cart = () => {
  const { cart, removeProduct } = useContext(CartProvider);
  return (
    <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      {cart.length ? (
        <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {cart.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              price={product.price}
              buttonName="Remove Product"
              action={({ id }) => removeProduct(id)}
            />
          ))}
        </div>
      ) : (
        <h1 className="text-2xl text-center"> Cart is Empty...</h1>
      )}
    </div>
  );
};

export default Cart;
