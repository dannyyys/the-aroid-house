import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("cartItems")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    console.log(JSON.parse(localStorage.getItem("cartItems")));
  }, [items]);

  return (
    <CartContext.Provider value={[items, setItems]}>
      {props.children}
    </CartContext.Provider>
  );
};
