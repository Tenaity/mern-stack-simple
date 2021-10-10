import React, { useState, useContext } from "react";
import "../css/Auth.css";
import axios from "axios";
import AppContext from "./AppContext";
import { useHistory } from "react-router-dom";
const Register = () => {
  const { dispatch } = useContext(AppContext);
  const history = useHistory();
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const onChangeHandle = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const onSubmitHandle = async (e) => {
    try {
      e.preventDefault();
      const option = {
        method: "post",
        url: "/api/v1/auth/register",
        data: userInput,
      };
      const response = await axios(option);
      const { token, userName } = response.data.data;
      localStorage.setItem("token", token);
      dispatch({ type: "CURRENT_USER", payload: { userName } });
      history.push("/");
    } catch (err) {
      console.log(err);
      setErrorMessage(err.response.data.message);
    }
  };
  return (
    <section className="auth-container">
      <form action="" className="auth-form" onSubmit={onSubmitHandle}>
        <h2>Register New Account</h2>
        {errorMessage &&
          (Array.isArray(errorMessage) ? (
            errorMessage.map((err) => (
              <div className="error-message">Error: {err}</div>
            ))
          ) : (
            <div className="error-message">Error: {errorMessage}</div>
          ))}

        <input
          type="text"
          name="name"
          id="name"
          value={userInput.name}
          onChange={onChangeHandle}
          required
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          id="email"
          value={userInput.email}
          onChange={onChangeHandle}
          required
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          id="password"
          required
          value={userInput.password}
          onChange={onChangeHandle}
          placeholder="Password"
        />
        <button className="btn" type="submit">
          Register
        </button>
      </form>
    </section>
  );
};

export default Register;
