import React from "react";
import "./chegirmalar.scss";
import ChegirmalarCard from "./ChegirmalarCard";
import Slider from "react-slick";

import "./chegirmalar.scss";
import { Autoplay } from "swiper/modules";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
const Chegirmalar = ({ base, addGood }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 10,
    cssEase: "linear",
  };
  return (
    <div className="chegirmalar">
      <div className="chegirmalar_wrapper">
        <Typography variant="h4" fontWeight={"700"} marginBottom={"30px"}>
          Yangi chegirmalar
        </Typography>
        <div className="slider-container">
          <Slider {...settings}>
            {base?.map((elem) => (
              <ChegirmalarCard addGood={addGood} key={base.id} {...elem} />
            ))}
          </Slider>

          <div className="all_card">
            <NavLink to={"allproduct"}>
              <button className="all">Barchasini ko'rish</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chegirmalar;
