// import React from 'react';
import { useState, useContext } from "react";
import Password from "../password.json";
import { statecontext } from "../statecontext/Context";

function Login() {
  const { state, dispatch } = useContext(statecontext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function getName(event) {
    setName(event.target.value);
  }

  function getPassword(event) {
    setPassword(event.target.value);
  }

  function Submit(event) {
    event.preventDefault();
    Password.forEach((value) => {
      if (value.username == name && value.password == password) {
        localStorage.setItem("isLoggedin", true);
        dispatch({
          type: "login",
          payload: { isAuthenticated: true },
        });
      } else {
        setError("Invalid password");
      }
    });
  }

  return (
    <div class="container">
      <div class="row pt-5">
        <div class="col align-self-start">
        </div>
        <div class="col align-self-center">
          <h2 class="text-center">Login</h2>
          <form class="row g-3 needs-validation pt-3" novalidate>
            <div class="col-12">
              <label for="validationCustom01" class="form-label">Username</label>
              <input type="text" class="form-control" id="validationCustom01" onChange={getName} required />
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>
            <div class="col-12">
              <label for="validationCustom02" class="form-label">Password</label>
              <input type="text" class="form-control" id="validationCustom02" onChange={getPassword} required />
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>

            <div class="col-12">
              <button class="btn btn-primary" type="submit" onClick={Submit}>Login</button>
            </div>
          </form>
        </div>
        <div class="col align-self-end">
        </div>
      </div>
    </div>
  );
}

export default Login;
