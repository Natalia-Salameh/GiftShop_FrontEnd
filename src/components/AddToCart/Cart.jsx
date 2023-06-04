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
        <div className="empty-cart">
          <img src="./images/shopping-bag.png" alt="Shopping Bag" />
          <h3>Your Shopping bag is empty.</h3>
        </div>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="item-details">
                  <img
                    className="item-image"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="item-info">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-description">{item.description}</p>
                  </div>
                </div>
                <div className="item-controls">
                  <button
                    className="quantity-button"
                    onClick={() => decrementQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="item-quantity">{item.quantity}</span>
                  <button
                    className="quantity-button"
                    onClick={() => incrementQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  <i className="bi bi-x-circle-fill"></i>
                </button>
              </li>
            ))}
          </ul>
          <div className="checkout-container">
            <CheckoutButton />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
