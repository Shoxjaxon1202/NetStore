import { Typography } from "@mui/material";
import React from "react";

import "../styles/cart.scss";
import CartItem from "../UI/CartItem/CartItem";
import { info } from "sass";
const Cart = ({ cart, deleteItem }) => {
  return (
    <div className="cart">
      <div className="cart_wrapper">
        <Typography variant="h4">
          {cart.length
            ? "Siz tanlagan mahsulotlar"
            : "Savatda mahsulotlar yo'q"}
        </Typography>

        <div className="cart_cards">
          {cart?.map((elem) =>
            cart?.length > 0 ? (
              <CartItem deleteItem={deleteItem} key={elem?.id} {...elem} />
            ) : (
              `Malumot bosh`
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
