import React, { createContext, useReducer } from "react";

export const CartProvider = createContext();

const CartContext = ({ children }) => {
  const initialValue = [];
  const reducer = (state, action) => {
    switch (action.type) {
      case "Add": {
        return [...state, action.payload];
      }
      case "Remove": {
        const filteredCart = state.filter(({ id }) => {
          return id != action.id;
        });
        return filteredCart;
      }
      default:
        return state;
    }
  };
  const [cart, dispatch] = useReducer(reducer, initialValue);
  const addProduct = (product) => {
    dispatch({ type: "Add", payload: product });
    console.log(product);
  };

  const removeProduct = (productID) => {
    dispatch({ type: "Remove", id: productID });
    console.log(productID);
  };

  console.log(cart);

  return (
    <CartProvider.Provider value={{ addProduct, removeProduct, cart }}>
      {children}
    </CartProvider.Provider>
  );
};

export default CartContext;
