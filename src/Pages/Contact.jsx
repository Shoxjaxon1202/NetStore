import React, { useState } from "react";
import axios from "axios";
import "../styles/contact.scss";
import icon from "../assets/img/icons-phone.png";
import icon2 from "../assets/img/icons-mail.png";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const botToken = "7232269128:AAHZIjx7GIn1Sr8A413W7VMysW4m24r1EJo";
  const chatId = "6575316231";

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const sendMessageToTelegram = async () => {
    const text = `Ism: ${name}\nTelefon: ${phone}\nXabar: ${message}`;
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
      console.error("Xatolik yuz berdi", error);
      toast.error("Xabar yuborishda xatolik yuz berdi");
    }
  };

  return (
    <div className="contact">
      <div className="contact_intro">
        <span className="contact_subtitle">Bosh sahifa</span>/
        <span className="contact_subtext">Aloqa</span>
      </div>
      <div className="contact_parentwrapper">
        <div className="contact_left">
          <div className="contact_wrapper">
            <div className="contact_card">
              <div className="contact_card_intro">
                <img src={icon} alt="" className="contact_img" />
                <h3 className="contact_title">Bizga Qo'ng'iroq Qiling</h3>
              </div>
              <p className="contact_text">Biz 24/7 kun tartibida ishlaymiz</p>
              <p className="contact_text">Raqam: +998917777777</p>
            </div>
            <span className="contact_hr"></span>

            <div className="contact_card">
              <div className="contact_card_intro">
                <img src={icon2} alt="" className="contact_img" />
                <h3 className="contact_title">Bizga Email Yozing</h3>
              </div>
              <p className="contact_text">Biz 24/7 kun tartibida ishlaymiz</p>
              <p className="contact_text">Email: example@example.com</p>
            </div>
          </div>
        </div>
        <div className="contact_right">
          <form>
            <div className="contact_right_top">
              <input
                placeholder="Ismingiz"
                type="text"
                name="name"
                value={name}
                onChange={handleInput}
                className="contact_input"
              />
              <input
                placeholder="Telefon raqamingiz"
                type="text"
                name="phone"
                value={phone}
                onChange={handleInput}
                className="contact_input"
              />
            </div>
            <textarea
              className="contact_textarea"
              placeholder="Sizning xabaringiz"
              name="message"
              value={message}
              onChange={handleInput}
            />
          </form>
          <button className="contact_btn all" onClick={sendMessageToTelegram}>
            Habar yuborish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
