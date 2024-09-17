import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./intro.scss";
import laptop from "../../assets/img/laptop.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate("/cart"); 
  };

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
              <p className="home_text">HP Laptop 15s-fq5xxx</p>
              <button className="home_btn" onClick={handleShopNowClick}>
                Shop naw
              </button>
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
              <button className="home_btn" onClick={handleShopNowClick}>
                Shop naw
              </button>
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
              <button className="home_btn" onClick={handleShopNowClick}>
                Shop naw
              </button>
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
              <button className="home_btn" onClick={handleShopNowClick}>
                Shop naw
              </button>
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
