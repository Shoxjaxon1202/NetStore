import React from "react";

import "./newProduct.scss";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const NewProduct = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate("/allproduct");
  };
  return (
    <Typography className="newProduct" component={"div"}>
      <Typography variant="h4" className="newProduct_title">
        Yangi mahsulotlar
      </Typography>
      <Typography
        display={"flex"}
        alignItems={"center"}
        gap={"50px"}
        component={"div"}
        className="newProduct_card">
        <Typography
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          component={"div"}
          className="newProduct_left">
          <Typography
            display={"flex"}
            alignItems={"start"}
            justifyContent={"end"}
            flexDirection={"column"}
            gap={"20px"}
            component={"div"}
            className="newProduct_left_card">
            <Typography variant="h6" color={"white"}>
              PlayStation 5
            </Typography>
            <Typography variant="p" color={"white"}>
              Black and White version of the PS5 coming out on sale.
            </Typography>
            <Button className="newProduct_btn" onClick={handleShopNowClick} variant="text">
              Shop Now
            </Button>
          </Typography>
        </Typography>

        <Typography component={"div"} className="newProduct_right">
          <Typography component={"div"} className="newProduct_top">
            {" "}
            <Typography
              display={"flex"}
              alignItems={"start"}
              justifyContent={"end"}
              flexDirection={"column"}
              gap={"20px"}
              component={"div"}
              className="newProduct_top_card">
              <Typography variant="h6" color={"white"}>
                Women’s Collections
              </Typography>
              <Typography variant="p" color={"white"}>
                Featured woman collections that give you another vibe.
              </Typography>
              <Button className="newProduct_btn" onClick={handleShopNowClick} variant="text">
                Shop Now
              </Button>
            </Typography>
          </Typography>
          <Typography
            display={"flex"}
            alignItems={"center"}
            gap={"20px"}
            component={"div"}
            className="newProduct_bottom">
            <Typography component={"div"} className="newProduct_bottom_left">
              <Typography
                component={"div"}
                className="newProduct_bottom_left_card"
                display={"flex"}
                alignItems={"start"}
                justifyContent={"end"}
                flexDirection={"column"}
                gap={"20px"}>
                <Typography variant="h6" color={"white"}>
                  Speakers
                </Typography>
                <Typography variant="p" color={"white"}>
                  Amazon wireless speakers
                </Typography>
                <Button className="newProduct_btn" onClick={handleShopNowClick} variant="text">
                  Shop Now
                </Button>
              </Typography>
            </Typography>
            <Typography component={"div"} className="newProduct_bottom_right">
              <Typography
                component={"div"}
                display={"flex"}
                alignItems={"start"}
                justifyContent={"end"}
                flexDirection={"column"}
                gap={"20px"}
                className="newProduct_bottom_right_card">
                <Typography variant="h6" color={"white"}>
                  Perfume
                </Typography>
                <Typography variant="p" color={"white"}>
                  GUCCI INTENSE OUD EDP
                </Typography>
                <Button className="newProduct_btn" onClick={handleShopNowClick} variant="text">
                  Shop Now
                </Button>
              </Typography>
            </Typography>
          </Typography>
        </Typography>
      </Typography>
    </Typography>
  );
};

export default NewProduct;
