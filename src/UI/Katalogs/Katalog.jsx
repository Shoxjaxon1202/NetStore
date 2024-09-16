import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./katalog.scss";

import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import { Navigation } from "@mui/icons-material";

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 100,
    cssEase: "linear",
  };
  return (
    <div className="slider-container katalog">
      <h1 className="katalog_title">Kataloglar</h1>
      <Slider className="katalogs" {...settings}>
        <div className="katalog_card">
          <PhoneIphoneOutlinedIcon className="katalog_icon" />
          <p className="katalog_text">Telefon</p>
        </div>
        <div className="katalog_card">
          <LaptopMacOutlinedIcon className="katalog_icon" />
          <p className="katalog_text">Kompyuter</p>
        </div>
        <div className="katalog_card">
          <WatchOutlinedIcon className="katalog_icon" />
          <p className="katalog_text">Aqilli soatlar</p>
        </div>
        <div className="katalog_card">
          <CameraAltOutlinedIcon className="katalog_icon" />
          <p className="katalog_text">Kamera</p>
        </div>
        <div className="katalog_card">
          <HeadphonesOutlinedIcon className="katalog_icon" />
          <p className="katalog_text">Quloqchinlar</p>
        </div>
        <div className="katalog_card">
          <VideogameAssetOutlinedIcon className="katalog_icon" />
          <p className="katalog_text">Aksesuarlar </p>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
