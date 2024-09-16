import React from "react";
import rasm from "../assets/img/unsplash_aOC7TSLb1o8.png";

import "./about.scss";
import Slider from "react-slick";

import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import { Navigation } from "@mui/icons-material";

import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 100,
    cssEase: "linear",
  };
  return (
    <div className="about">
      <div className="contact_intro">
        <span className="contact_subtitle">Bosh sahifa</span>/
        <span className="contact_subtext">Haqimizda</span>
      </div>
      <div className="about_card">
        <div className="about_left">
          <h1 className="about_title">Biz haqimizda</h1>
          <p className="about_text">
            Lorem ipsum dolor sit amet consectetur. Pulvinar senectus elit diam
            arcu faucibus ultrices mauris cursus. Risus in eu dui luctus enim
          </p>
        </div>
        <div className="about_right">
          <img src={rasm} alt="" className="about_img" />
        </div>
      </div>
      <div className="slider-container about">
        <Slider className="abouts" {...settings}>
          <div className="about_subcard">
            <div className="about_box">
              <StorefrontOutlinedIcon className="about_icon" />
            </div>
            <h3 className="about_subtitle">10.5k</h3>
            <p className="about_subtext">Sallers active our site</p>
          </div>
          <div className="about_subcard">
            <div className="about_box">
              {" "}
              <MonetizationOnOutlinedIcon className="about_icon" />
            </div>
            <h3 className="about_subtitle">33k</h3>
            <p className="about_subtext">Mopnthly Produduct Sale</p>
          </div>
          <div className="about_subcard">
            <div className="about_box">
              {" "}
              <RedeemOutlinedIcon className="about_icon" />
            </div>
            <h3 className="about_subtitle">45.5k</h3>
            <p className="about_subtext">Customer active in our site</p>
          </div>
          <div className="about_subcard">
            <div className="about_box">
              <RequestQuoteOutlinedIcon className="about_icon" />
            </div>
            <h3 className="about_subtitle">25k</h3>
            <p className="about_subtext">Anual gross sale in our site</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default About;
