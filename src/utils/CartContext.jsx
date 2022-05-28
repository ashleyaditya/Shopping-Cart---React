import React, { createContext, useReducer } from "react";

export const CartProvider = createContext();

const CartContext = ({ children }) => {
  const initialValue = [];
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD": {
        return [...state, action.payload];
      }
      case "REMOVE": {
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
    dispatch({ type: "ADD", payload: product });
  };

  const removeProduct = (productID) => {
    dispatch({ type: "REMOVE", id: productID });
  };

  return (
    <CartProvider.Provider value={{ addProduct, removeProduct, cart }}>
      {children}
    </CartProvider.Provider>
  );
};

export default CartContext;
