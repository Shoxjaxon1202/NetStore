import React from "react";

import "./end.scss";
import { Typography } from "@mui/material";


import rasm from "../../assets/img/Services.png"
import rasm1 from "../../assets/img/Services (1).png"
import rasm2 from "../../assets/img/Services (2).png"
const End = () => {
  return (
    <div className="end">
      <div className="end_wrapper">
        <div className="end_card">
          <img src={rasm} alt="" className="end_img" />
          <Typography variant="h6" className="end_title">
            BEPUL VA TEZ YETKAZIB BERISH
          </Typography>
          <Typography variant="p" className="end_text">
            {" "}
            Buyurtmalar uchun bepul yetkazib berish
          </Typography>
        </div>
        <div className="end_card">
          <img src={rasm1} alt="" className="end_img" />
          <Typography variant="h6" className="end_title">
            24/7 MIJOZLARGA XIZMAT KO'RSATISH
          </Typography>
          <Typography variant="p" className="end_text">
            Do'stona 24/7 mijozlarni qo'llab-quvvatlash
          </Typography>
        </div>
        <div className="end_card">
          <img src={rasm2} alt="" className="end_img" />
          <Typography variant="h6" className="end_title">
            PULNI QAYTARIB BERISH KAFOLATI
          </Typography>
          <Typography variant="p" className="end_text">
            Biz pulni 30 kun ichida qaytaramiz
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default End;
