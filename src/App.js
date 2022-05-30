import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import Profile from "./profile/Profile";
import MyPic from "./profile/MyPic.png";


function App() {
  function handleName(name) {
    alert(`Hello my name is ${name}`);
  }

  return (
    <div className="App">
      <NavBar/>
      <Profile
        fullName="Mehdi Sassi"
        bio="Hi, i'm Mehdi and i love Taraji and Manchester United <3"
        profession="Full-Stack JS Developer"
        handleName={handleName}
      >
        <img
          style={{ borderRadius:"10px", width: "200px", height: "200px" }}
          src={MyPic}
          alt="avatar"
        />
      </Profile>
    </div>
  )
}

export default App;
