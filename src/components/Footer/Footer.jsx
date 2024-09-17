import React, { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./Footer.scss";

const Footer = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  const botToken = "7232269128:AAHZIjx7GIn1Sr8A413W7VMysW4m24r1EJo";
  const chatId = "6575316231";

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    else if (name === "phone") setPhone(value);
    else if (name === "message") setMessage(value);
  };

  const sendMessageToTelegram = async () => {
    if (!name) {
      nameRef.current.focus();
      return;
    }
    if (!phone) {
      phoneRef.current.focus();
      return;
    }
    if (!message) {
      messageRef.current.focus();
      return;
    }

    const text = `Footer\nIsm: ${name}\nTelefon: ${phone}\nXabar: ${message}`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      await axios.post(url, {
        chat_id: chatId,
        text: text,
      });
      toast.success("Xabar yuborildi!");
      setName("");
      setPhone("");
      setMessage("");
    } catch (error) {
      toast.error("Xabar yuborishda xatolik yuz berdi");
    }
  };

  return (
    <footer className="footer">
      <div className="footer_wrapper">
        <div className="footer__brand">
          <div className="footer__logo">BrandLogo</div>
          <p>Biz ijtimoiy tarmoqlarda</p>
          <div className="footer__socials">
            <a href="https://twitter.com/fakeTwitterAccount">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/fakeInstagramAccount">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/in/fakeLinkedinAccount">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://facebook.com/fakeFacebookAccount">
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessageToTelegram();
            }}>
            <input
              className="footer_input"
              type="text"
              name="name"
              placeholder="Ismingiz"
              ref={nameRef}
              value={name}
              onChange={handleInput}
               
            />
            <input
              className="footer_input"
              type="text"
              name="phone"
              placeholder="Telefon raqam"
              ref={phoneRef}
              value={phone}
              onChange={handleInput}
               
            />
            <textarea
              placeholder="Savol berish..."
              name="message"
              ref={messageRef}
              value={message}
              onChange={handleInput}
               ></textarea>
            <button className="footer_btn" type="submit">
              Yuborish
            </button>
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
