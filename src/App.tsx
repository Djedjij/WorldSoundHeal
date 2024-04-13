import React from "react";
import "./App.scss";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import SoundHealing from "./components/SoundHealing/SoundHealing";
import Motivation from "./components/Motivation/Motivation";
import Advantages from "./components/Advantages/Advantages";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <SoundHealing />
      <Services />
      <Motivation />
      <Advantages />
    </div>
  );
}

export default App;
