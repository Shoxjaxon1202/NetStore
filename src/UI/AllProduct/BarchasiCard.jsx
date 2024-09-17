import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
  RemoveRedEyeOutlined,
  Shop,
  ShowChart,
  Shower,
  Visibility,
} from "@mui/icons-material";
import { Box, Button, Rating } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { NavLink } from "react-router-dom";

// import "./allproduct.scss"
const AllProductCard = ({
  id,
  title,
  price,
  description,
  image,
  addGood,
  name,
  icon,
  quantity,
  category,

  rating,
  toggleIconColor,
  isIconRed,
}) => {
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };
  const value = rating?.rate;
  return (
    <div className="allProduct_card">
      <NavLink to={`/elementItem/${id}`}>
        {" "}
        <div className="allProduct_card_top">
          <img src={image} alt="rasm" className="allProduct_card_img" />
        </div>
      </NavLink>
      <FavoriteBorder
        onClick={toggleIconColor}
        className={
          `icon ${isIconRed ? "icon--red" : ""}` + " allProduct_card_icon"
        }
        style={{ color: isIconRed ? "red" : "initial" }}
      />
      <RemoveRedEyeOutlined className="allProduct_card_icon2" />

      <h3 className="allProduct_card_title">{title.slice(0, 50)}</h3>
      <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
        <p className="allProduct_card_price">${price}</p>

        <Rating
          name="text-feedback"
          value={value}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Box sx={{ ml: 2 }}>{labels[value]}</Box>
        <p className="allProduct_card_count">({rating?.count})</p>
        <Button
          variant="text"
          onClick={() => {
            addGood(id, name, price, title, quantity, image, category);
          }}>
          <AddShoppingCart />
        </Button>
      </Box>
    </div>
  );
};

export default AllProductCard;
