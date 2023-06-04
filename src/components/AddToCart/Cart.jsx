import React, { useContext } from "react";
import { CartContext } from "./cartContext";
import "./Cart.css";
import CheckoutButton from "../../components/order";

const Cart = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } =
    useContext(CartContext);

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <div>
          <img src="./images/shopping-bag.png" />
          <h3>Your Shopping bag is empty.</h3>
        </div>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="item-details">
                <img className="item-image" src={item.image} alt={item.name} />
                <div className="item-info">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                </div>
              </div>
              <div className="item-controls">
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <span className="item-quantity">{item.quantity}</span>
                <button onClick={() => incrementQuantity(item.id)}>+</button>
              </div>
              <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
          <CheckoutButton />
        </ul>
      )}
    </div>
  );
};

export default Cart;
