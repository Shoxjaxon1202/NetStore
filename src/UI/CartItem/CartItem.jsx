import { Add, Delete, Remove } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const CartItem = ({
  id,
  price,
  title,
  quantity,
  image,
  category,
  deleteItem,
}) => {
  return (
    <div className="cartItem">
      <img src={image} alt="" className="cartItem_img" />
      <div className="cartItem_left">
        <h4 className="cartItem_title">{title.slice(0, 50)}</h4>
        <p className="cartItem_text">category: {category}</p>
      </div>
      <div className="cartItem_middle">
        <Button variant="outlined">
          <Remove />
        </Button>
        <p className="cartItem_quantity">{quantity}</p>
        <Button variant="outlined">
          <Add />
        </Button>
      </div>
      <div className="cartItem_right">
        <Button
          onClick={() => {
            deleteItem(id);
          }}
          color="error"
          variant="contained">
          <Delete />
        </Button>
        <h3 className="cartItem_price">{price * quantity}$</h3>
        <h4 className="cartItem_discount">
          {Math.floor(price * quantity + price / 3)}$
        </h4>
      </div>
    </div>
  );
};

export default CartItem;
