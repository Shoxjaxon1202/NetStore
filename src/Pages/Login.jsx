import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import "./login.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username === "emilys" && formData.password === "emilyspass") {
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "emilys",
          password: "emilyspass",
          expiresInMins: 30,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          const token = data?.token;
          localStorage.setItem("tokenxon", token);
          navigate("/");
          toast.success(data?.firstName + " Xush kelibsiz");
        });
    } else {
      setError(true);
      toast.error("Invalid username or password");
    }

    formData.username = "";
    formData.password = "";
  };

  return (
    <Box className="login-wrapper">
      <Box className="login-box">
        <Typography variant="h5" className="login-title">
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="filled"
            name="username"
            value={formData.username}
            onChange={handleChange}
            fullWidth
            className="login-input"
            error={error && !formData.username}
            helperText={
              error && !formData.username ? "Username is required" : ""
            }
          />
          <TextField
            label="Password"
            variant="filled"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            className="login-input"
            error={error && !formData.password}
            helperText={
              error && !formData.password ? "Password is required" : ""
            }
          />
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            fullWidth
            className="login-button">
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
