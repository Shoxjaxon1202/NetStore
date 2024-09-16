import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_wrapper">
        <div className="footer__brand">
          <div className="footer__logo">BrandLogo</div>
          <p>Biz ijtimoiy tarmoqlarda</p>
          <div className="footer__socials">
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        <div className="footer__contact">
          <h4>Aloqa</h4>
          <p>Manzil: Toshkent sh</p>
          <p>
            Email: <a href="mailto:qwertyui@gmail.com">qwertyui@gmail.com</a>
          </p>
          <p>
            Tel: <a href="tel:+998917777777">+998917777777</a>
          </p>
        </div>

        <div className="footer__about">
          <h4>Haqimizda</h4>
          <p>
            <a href="#">
              Maxfiylik Siyosati va Shaxsiy Ma'lumotlarni Himoya Qilish
            </a>
          </p>
          <p>
            <a href="#">Mahsulotlarni va to'lovlarni qaytarish siyosati</a>
          </p>
        </div>

        <div className="footer__question">
          <h4>Savol berish</h4>
          <form>
            <input className="footer_input" type="text" placeholder="Ismingiz" required />
            <input className="footer_input" type="text" placeholder="Telefon raqam" required />
            <textarea  placeholder="Savol berish..." required></textarea>
            <button className="footer_btn" type="submit">Yuborish</button>
          </form>
        </div>

        <div className="footer__bottom">
          <p>
            "2024 © notebook.uz MCHJ. Tin 309376127. Barcha huquqlar
            himoyalangan"
          </p>
          <p>Hamkor: Clean coders group</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
