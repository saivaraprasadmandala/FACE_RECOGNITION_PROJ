import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Navbar from "./navbar";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:3001/login", user).then((res) => {
      setLoginUser(res.data.user);
      console.log("send");
      navigate("/");
    });
  };

  return (
    <body>
      
      <div className="outline">
      <div className="login-card">
        
        <div className="login-form">
        <h2 className="l4">Login</h2>
        <h3 className="l5">Enter your credentials</h3>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Username"
          ></input>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
          ></input>
          <br></br>
          <a href="/signup" className="l1">Don't Have a Account? Create One!!</a>
          <br></br>
          <button className="button" onClick={login}>
            LOGIN
          </button>
        </div>
      </div>
      </div>
    </body>
  );
};

export default Login;