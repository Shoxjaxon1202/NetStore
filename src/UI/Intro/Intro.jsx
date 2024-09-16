import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./intro.scss";

import laptop from "../../assets/img/laptop.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Intro = () => {
  return (
    <div className="home">
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <div className="home_card">
            <div className="home_left">
              <h2 className="home_title">New Laptop</h2>
              <p className="home_text">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button className="home_btn">Shop naw</button>
            </div>
            <div className="home_right">
              <img src={laptop} alt="" className="home_img" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home_card">
            <div className="home_left">
              <h2 className="home_title">New Laptop</h2>
              <p className="home_text">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button className="home_btn">Shop naw</button>
            </div>
            <div className="home_right">
              <img src={laptop} alt="" className="home_img" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home_card">
            <div className="home_left">
              <h2 className="home_title">New Laptop</h2>
              <p className="home_text">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button className="home_btn">Shop naw</button>
            </div>
            <div className="home_right">
              <img src={laptop} alt="" className="home_img" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home_card">
            <div className="home_left">
              <h2 className="home_title">New Laptop</h2>
              <p className="home_text">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button className="home_btn">Shop naw</button>
            </div>
            <div className="home_right">
              <img src={laptop} alt="" className="home_img" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Intro;
