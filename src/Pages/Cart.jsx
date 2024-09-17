import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

import "../styles/cart.scss";
import CartItem from "../UI/CartItem/CartItem";

const Cart = ({ cart, deleteItem , setCart }) => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  console.log(setCart);
  
  useEffect(() => {
    setCount(cart.length);
    const totalAmount = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(totalAmount);
  }, [cart]);

  return (
    <div className="cart">
      <div className="cart_wrapper">
        <Typography variant="h4">
          {cart.length
            ? "Siz tanlagan mahsulotlar"
            : "Savatda mahsulotlar yo'q"}
        </Typography>

        <div className="cart_box">
          <div className="cart_cards">
            {cart.map((elem) => (
              <CartItem
                deleteItem={deleteItem}
                key={elem.id}
                {...elem}
                cart={cart}
                setCart={setCart}
              />
            ))}
          </div>
          <div className="cart_right">
            <div className="order-card">
              <h2>Buyurtmangiz</h2>
              <div className="details">
                <p>
                  Mahsulotlar ({count}){" "}
                  <span className="price">{total.toFixed(2)} $</span>
                </p>
                <button className="delivery">
                  Yetkazib berish M05 29 (Ertaga)
                </button>
                <p>
                  Jami <span className="price">{total.toFixed(2)} $</span>
                </p>
              </div>
              <button className="checkout-btn">
                Rasmiylashtirishga o‘tish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
