/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import CartContext from "./CartContext";
import "./index.css";

const Cart = () => {
  const { cart, dispatch, totalQuantity, totalAmount } =
    useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="item-details">
            <div className="item-title">{item.name}</div>
            <div className="item-description">{item.description}</div>
            <div className="item-price">${item.price.toFixed(2)}</div>
            <button
              className="remove-btn"
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: item.id })
              }
            >
              REMOVE
            </button>
          </div>
          <div className="item-actions">
            <button
              onClick={() =>
                dispatch({ type: "DECREASE_QUANTITY", payload: item.id })
              }
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() =>
                dispatch({ type: "INCREASE_QUANTITY", payload: item.id })
              }
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="totals">
        <p>
          SUBTOTAL: <span>${totalAmount.toFixed(2)}</span>
        </p>
        <p>
          SHIPPING: <span>FREE</span>
        </p>
        <h3>
          TOTAL: <span>${totalAmount.toFixed(2)}</span>
        </h3>
      </div>
      <div className="footer-note">Get Daily Cash With Nespola Card</div>
    </div>
  );
};

export default Cart;
