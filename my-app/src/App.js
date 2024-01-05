import React, { useState } from "react";
import axios from "axios";
import WelcomePage from "./Welcome";
import "./App.css";
import { useNavigate, Route, Routes } from "react-router-dom";

function App(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000", { username, password })
      .then((response) => {
        console.log(response);
        navigate("/welcome");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/welcome"
          element={<WelcomePage {...props} username={username} />}
        />
        <Route path="/" element={<h1>welcome to the game!</h1>} />
      </Routes>

      <form onSubmit={handleSubmit} action="/welcom">
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
          ;
        </label>
        <br />
        <label>
          Password:
          <input type="text" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
