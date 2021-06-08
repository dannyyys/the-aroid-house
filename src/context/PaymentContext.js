import React, { useState, createContext, useEffect } from "react";

export const PaymentContext = createContext();

export const PaymentProvider = (props) => {
  const [paymentItem, setPaymentItem] = useState([]);

  useEffect(() => {
    setPaymentItem(JSON.parse(localStorage.getItem("Item")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("Item", JSON.stringify(paymentItem));
    console.log(JSON.parse(localStorage.getItem("Item")));
  }, [paymentItem]);

  return (
    <PaymentContext.Provider value={[paymentItem, setPaymentItem]}>
      {props.children}
    </PaymentContext.Provider>
  );
};
