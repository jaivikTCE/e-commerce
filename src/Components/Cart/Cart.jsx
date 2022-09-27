import React, { useRef } from "react";
import "./Cart.scss";

import { useStateContext } from "../../Context/StateContex";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();

  return (
    <>
      <div className="cart-wrapper" ref={cartRef}>
        <div className="cart-container">
          <button
            type="button"
            className="cart-heading"
            onClick={() => setShowCart(false)}
          >
            <i className="fa-solid fa-angle-left"></i>
            <span className="heading">Your Cart</span>
            <span className="cart-num-items">{totalQuantities} items</span>
          </button>

          {cartItems.length < 1 && (
            <div className="empty-cart">
              <i className="fa-solid fa-bag-shopping"></i>
              <h3>Your shopping bag is empty</h3>
              <a href="#Cart">
                <button
                  type="button"
                  onClick={() => setShowCart(false)}
                  className="btn"
                >
                  Continue Shopping
                </button>
              </a>
            </div>
          )}

          <div className="product-container">
            {cartItems.length >= 1 &&
              cartItems.map((item) => (
                <div className="product" key={item.id}>
                  <img
                    src={item.image}
                    alt="prodcut_image"
                    className="cart-product-image"
                  />
                  <div className="item-desc">
                    <div className="flex top">
                      <h5>{item.title}</h5>
                      <h4>₹{item.price}</h4>
                    </div>
                    <div className="flex bottom">
                      <div>
                        <p className="quantity-desc">
                          <span
                            className="minus"
                            onClick={() =>
                              toggleCartItemQuanitity(item.id, "dec")
                            }
                          >
                            <i className="fa-solid fa-minus"></i>
                          </span>
                          <span className="num">{item.quantity}</span>
                          <span
                            className="plus"
                            onClick={() =>
                              toggleCartItemQuanitity(item.id, "inc")
                            }
                          >
                            <i className="fa-solid fa-plus"></i>
                          </span>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="remove-item"
                        onClick={() => onRemove(item)}
                      >
                        <i className="fa-solid fa-square-xmark"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {cartItems.length >= 1 && (
            <div className="cart-bottom">
              <div className="total">
                <h3>Subtotal: </h3>
                <h3>₹{totalPrice}</h3>
              </div>
              <div className="btn-container">
                <button type="button" className="btn">
                  <a href="/success">Pay Now</a>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
