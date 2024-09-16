import React, { useEffect, useState } from "react";
import Loyout from "./components/Layout/Loyout";
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import Login from "./Pages/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Item from "./Pages/Item";
import Katalog from "./Pages/Katalog";
import AllProduct from "./UI/AllProduct/AllProduct";
import Cart from "./Pages/Cart";
import RegisterForm from "./Pages/Register";
const App = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("tokenxon");
  const login = localStorage.getItem("islogin");

  useEffect(() => {
    if (token?.includes("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey")) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, []);

  const handleLogin = (isRegister) => {
    localStorage.setItem(
      "tokenjon",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvbmRvZSIsImV4cCI6MTY4OTU4MjQwMH0.sFhs7bUVHHXgPqvTxLqQeJ6aTZUhjKZ9XNQkGRl9dO8"
    );
    navigate("/")
  };

  return (
    <div>
      <ToastContainer />
      <Routes>
        {!login || token ? (
          <Route path="/" element={<Loyout handleLogin={handleLogin} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<Login />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/elementItem" element={<Item />} />
            <Route path="/katalog" element={<Katalog />} />
            <Route path="/elementItem/:id" element={<Item />} />
            <Route path="/allProduct" element={<AllProduct />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </div>
  );
};

export default App;
