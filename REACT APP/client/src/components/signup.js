import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";


const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
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

  const signup = () => {
    const { name, username, password } = user;
    if (name && username && password) {
      // console.log(username);
      // axios.post("http://43.206.117.90:5000/signup", user)
      axios
        .post("http://localhost:3001/signup", user)
        .then((res) => {
          alert(res.data.message);
          navigate("/login");
        })
        .catch((err) => console.log("req error"));
    } else {
      alert("invlid input");
    }
  };

  return (
    <body>
      
      <div className="login-card">
        
        <div className="login-form">
        <h2 className="l6">Sign up</h2>
        <h3 className="l7">Enter your credentials</h3>
          <input
            type="text"
            name="name"
            value={user.name}
            placeholder="Your Name"
            onChange={handleChange}
          ></input>
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
          <a href="/" className="l3">existing user?</a>
          <button className="button" onClick={signup}>
            SIGNUP
          </button>
        </div>
      </div>
    </body>
  );
};

export default Register;