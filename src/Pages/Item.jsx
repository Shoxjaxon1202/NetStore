import { Box, CardMedia, Rating, Typography } from "@mui/material";
import React from "react";
import "../styles/Item.scss";
import StarIcon from "@mui/icons-material/Star";


import { DeliveryDining, Refresh } from "@mui/icons-material";
import { useParams } from "react-router-dom";
const Item = ({ base }) => {
  const params = useParams()?.id;

  const Item = base.filter((elem) => elem?.id == params);
  
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
  const value = Item[0]?.rating?.rate;
  return (
    <Typography
      sx={({ width: "100%" }, { minHeight: "500px" })}
      component={"div"}
      className="item">
      <Typography
        display={"flex"}
        alignItems={"center"}
        gap={"20px"}
        component={"div"}
        sx={{ width: "1100" }}
        margin={"50px auto"}
        className="item_wrapper">
        <Typography
          component={"div"}
          display={"flex"}
          alignItems={"center"}
          gap={"30px"}
          className="item_left"
          width={"100%"}>
          <Typography
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            width={"20%"}
            component={"div"}>
            <Typography
              component={"div"}
              padding={"20px"}
              borderRadius={"20px"}
             >
              <CardMedia
                sx={{ height: "100px" }}
                component={"image"}
                image={Item[0]?.image}
              />
            </Typography>
            <Typography
              component={"div"}
              padding={"20px"}
              borderRadius={"20px"}
             >
              <CardMedia
                sx={{ height: "100px" }}
                component={"image"}
                image={Item[0]?.image}
              />
            </Typography>
            <Typography
              component={"div"}
              padding={"20px"}
              borderRadius={"20px"}
             >
              <CardMedia
                sx={{ height: "100px" }}
                component={"image"}
                image={Item[0]?.image}
              />
            </Typography>
            <Typography
              component={"div"}
              padding={"20px"}
              borderRadius={"20px"}
             >
              <CardMedia
                sx={{ height: "100px" }}
                component={"image"}
                image={Item[0]?.image}
              />
            </Typography>
          </Typography>
          <Typography
            height={"500px"}
            width={"60%"}
            borderRadius={"20px"}
            padding={"20px"}
            component={"div"}>
            <CardMedia
              sx={{ height: "70%" , width: "80%"}}
              component={"image"}
              image={Item[0]?.image}
            />
          </Typography>
        </Typography>

        <Typography width={"30%"} component={"div"} className="item_right">
          <Typography className="item_top" component={"div"}>
            <Typography variant="h6" fontWeight={"800"}>
              {Item[0]?.title}
            </Typography>
            <Typography className="item_rating" component={"div"}>
              <Box sx={{ width: 100, display: "flex", alignItems: "center" }}>
                <Rating
                  name="text-feedback"
                  value={value}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <Typography variant="h7">
                  {Item[0]?.rating.count} Reviews
                </Typography>
                <Box sx={{ ml: 2 }}>{labels[value]} </Box>
              </Box>
            </Typography>
            <Typography variant="h5" fontWeight={"900"}>
              ${Item[0]?.price}
            </Typography>
            <Typography component={"p"}>{Item[0]?.description}</Typography>
          </Typography>
          <Typography
            marginTop={"30px"}
            className="item_bottom"
            component={"div"}
            border={"1px solid black"}
            borderRadius={"20px"}
            padding={"10px"}>
            <Typography
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}
              className="item_deliver"
              component={"div"}>
              <DeliveryDining fontSize="60" />
              <Typography component={"div"}>
                <Typography variant="h6">Bepul Yetkazib Berish</Typography>
                <Typography component="p">
                  Yetkazib berish uchun pochta indeksinigizni kiriting
                </Typography>
              </Typography>
            </Typography>
          </Typography>

          <Typography
            marginTop={"30px"}
            className="item_bottom"
            component={"div"}
            border={"1px solid black"}
            borderRadius={"20px"}
            padding={"10px"}>
            <Typography
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}
              className="item_deliver"
              component={"div"}>
              <Refresh fontSize="60" />
              <Typography component={"div"}>
                <Typography variant="h6">Bepul Yetkazib Berish</Typography>
                <Typography component="p">
                  Yetkazib berish uchun pochta indeksinigizni kiriting
                </Typography>
              </Typography>
            </Typography>
          </Typography>
        </Typography>
      </Typography>
    </Typography>
  );
};

export default Item;
