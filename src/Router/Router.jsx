import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import axios from "axios";
import { toast } from "react-toastify";
import Cart from "../Pages/Cart";
import Item from "../Pages/Item";
import AllProduct from "../UI/AllProduct/AllProduct";
import Katalog from "../Pages/Katalog";
import Register from "../Pages/Register";

const Router = ({ setCount, handleLogin }) => {
  const [base, setBase] = useState([]);
  const [cart, setCart] = useState([]);

  async function fetchData(url) {
    try {
      const res = await axios.get(url);
      setBase(res?.data);
    } catch (error) {
      console.error("Xatolik yuz berdi", error.message);
    }
  }

  useEffect(() => {
    fetchData("https://fakestoreapi.com/products");
  }, []);

  const addGood = (id, name, price, title, quantity = 1, image, category) => {
    const itemInclude = cart.findIndex((item) => item.id === id);
    if (itemInclude < 0) {
      setCount((prev) => prev + 1);

      setCart((prev) => {
        const newGood = {
          id: id,
          price: price,
          title: title,
          quantity: quantity,
          image: image,
          category: category,
        };
        return [...prev, newGood];
      });
      toast.success(title.slice(0, 20) + " added");
    } else {
      const addCountData = cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: Number(item.quantity) + 1,
          };
        } else {
          return item;
        }
      });
      setCart(addCountData);
    }
  };

  // DeleteItem

  const deleteItem = (id) => {
    const deletedItems = cart.filter((elem) => elem?.id !== id);
    setCount((count) => count - 1);
    setCart(deletedItems);
  };

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login handleLogin={handleLogin} />} />

      <Route path="/" element={<Home addGood={addGood} base={base} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/elementItem" element={<Item />} />
      {/* <Route path="/katalog" element={<Katalog />} /> */}
      <Route path="/elementItem/:id" element={<Item base={base} />} />
      <Route path="/allProduct" element={<AllProduct base={base} />} />
      <Route
        path="/cart"
        element={<Cart deleteItem={deleteItem} cart={cart} />}
      />
    </Routes>
  );
};

export default Router;
