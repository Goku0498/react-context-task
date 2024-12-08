/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case "DECREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    default:
      return state;
  }
};

export const CartProvider = ({ children, initialData }) => {
  const cartWithQuantities = initialData.map((item) => ({
    ...item,
    quantity: 1,
  }));

  const [cart, dispatch] = useReducer(cartReducer, cartWithQuantities);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
        totalQuantity,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
