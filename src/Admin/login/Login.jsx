import React, { useState } from "react";
import "./Login.css";
import alqalamLogo from "../../assets/AlqalamLogo.png";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const Login = () => {
  let [input, setInput] = useState({
    username: "",
    passkey: "",
  });
  let [login, setLogin] = useState(null);
  const navigate = useNavigate();
  let loginMessage = (message, type) => {
    if (type === "success") {
      toast.success(message, {
        position: "top-right",
      });
    } else if (type === "error") {
      toast.error(message, {
        position: "top-right",
      });
    } else {
      toast(message); // fallback default
    }
  };

  let handleOnChnage = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    if (input.username === "saffu" && input.passkey === "qalam@123") {
      setLogin("success");
      console.log(input);
      console.log(login);
      let message = "login SucessFul";
      loginMessage(message, "success");
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    } else {
      setLogin("faild");
      console.log(input);
      console.log(login);
      let message = "Please enter valid username & passkey ..! ";
       loginMessage(message, "error"); 
    }
  };

  return (
    <>
      <ToastContainer theme="colored" />
      <div className="loginSection">
        <div className="loginCont">
          <div className="loginLeft">
            <div className="leftinner">
              <div className="alqalamLogo">
                <img src={alqalamLogo} alt="imag" />
                <h1 className="logoh1">Al Qalam Academy</h1>
              </div>

              <div className="leftConttt">
                <h1>Admin Panel</h1>
                <p>
                  For security reasons, if you forget your username or password,
                  please contact the system administrator.
                </p>
              </div>
            </div>
          </div>
          <div className="loginright">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <form action="" className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                value={input.username}
                placeholder=" Enter you username"
                onChange={handleOnChnage}
                required
              />

              <input
                type="text"
                placeholder="Enter passkey !"
                name="passkey"
                value={input.passkey}
                onChange={handleOnChnage}
                required
              />

              <button className="lbtn">LogIn</button>

              {login === "success" && (
                <p className="success-message">Login Successful </p>
              )}
              {login === "faild" && (
                <p className="error-message">
                  Please enter valid username & passkey ..!
                </p>
              )}
            </form>
            <p className="lforgot">
              forget the passkey, please contact the site administrator.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
