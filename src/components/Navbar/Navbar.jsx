import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Logout, ShoppingCart } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { toast } from "react-toastify";

import "./navbar.scss";
const Navbar = ({ count, handleLogin }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    localStorage.removeItem("tokenxon");
    
    // navigate("/login");
    toast.warning("LogOut");

    localStorage.setItem("islogin" , true);
  };

  const handleClick = () => {
    navigate("/Register");
  };
  const isTrue = localStorage.getItem("tokenjon") ? true : false;

  return (
    <nav className="navbar bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Brand Logo
          </span>
        </NavLink>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}>
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default">
          <ul className="navbar_list font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className="navbar_link block py-2 px-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white">
                Bosh sahifa
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/elementItem/3"
                className="navbar_link block py-2 px-0 text-gray-900 rounded hover:bg-gray-100 dark:text-white">
                Katalog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="navbar_link block py-2 px-0 text-gray-900 rounded hover:bg-gray-100 dark:text-white">
                Haqimizda
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className="navbar_link cartcha block py-2 px-0 text-gray-900 rounded hover:bg-gray-100 dark:text-white">
                <ShoppingCart color="info" />
                <Typography className="count">{count}</Typography>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="navbar_link block py-2 px-0 text-gray-900 rounded hover:bg-gray-100 dark:text-white">
                Aloqa
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar_right">
          <input
            placeholder="Siz nima qidiryapsiz?"
            type="text"
            className="navbar_input"
          />
          <i className="navbar_icon fa-solid fa-magnifying-glass"></i>
        </div>
        <div>
          <li>
            {isTrue ? (
              <Button onClick={logout}>
                <Logout />
              </Button>
            ) : (
              <button className="register-button" onClick={handleClick}>
                Register
              </button>
            )}
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
