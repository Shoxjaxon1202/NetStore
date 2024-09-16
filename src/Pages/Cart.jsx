import { Typography } from "@mui/material";
import React from "react";

import "../styles/cart.scss";
import CartItem from "../UI/CartItem/CartItem";
import { info } from "sass";
const Cart = ({ cart, deleteItem }) => {
  console.log(cart);
  
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
            {cart?.map((elem) =>
              cart?.length > 0 ? (
                <CartItem
                  deleteItem={deleteItem}
                  key={elem?.id}
                  {...elem}
                />
              ) : (
                `Malumot bosh`
              )
            )}
          </div>
          <div className="cart_right">
            <div class="order-card">
              <h2>Buyurtmangiz</h2>
              <div class="details">
                <p>
                  Mahsulotlar (0) <span class="price">0 so'm</span>
                </p>
                <button class="delivery">
                  Yetkazib berish M05 29 (Ertaga)
                </button>
                <p>
                  Jami <span class="price">0 so'm</span>
                </p>
              </div>
              <button class="checkout-btn">Rasmiylashtirishga o‘tish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
