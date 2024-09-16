import React, { useEffect, useState } from "react";
import "./register.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.email && formData.password) {
      setTimeout(() => {
        toast.success("Xush kelibsiz");
        navigate("/home");
      }, 500);
    }
  };

  return (
    <div className="register-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Registratsiya</h2>
        <div className="form-group">
          <label htmlFor="username">Foydalanuvchi ismi</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Parol</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          onClick={localStorage.setItem(
            "tokenjon",
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvbmRvZSIsImV4cCI6MTY4OTU4MjQwMH0.sFhs7bUVHHXgPqvTxLqQeJ6aTZUhjKZ9XNQkGRl9dO8"
          )}
          type="submit">
          Ro'yxatdan o'tish
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
