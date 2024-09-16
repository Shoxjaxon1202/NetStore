import React from "react";
import "./topNav.scss";

import location from "../../assets/img/location.png";

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav_wrapper">
        <div className="topnav_left">
          <img src={location} alt="loaction" className="topnav_img" />
          <p className="topnav_title">Shahar:Toshkent</p>
        </div>
        <p className="topnav_text">
          Buyurtmalaringizni bepul yetkazib beramiz - atiga 1 kun ichida
        </p>
        <select name="" id="" className="topnav_select">
            <option value="en" className="topnav_language">En</option>
            <option value="en" className="topnav_language">Uzb</option>
            <option value="en" className="topnav_language">Rus</option>
        </select>
      </div>
    </div>
  );
};

export default TopNav;
