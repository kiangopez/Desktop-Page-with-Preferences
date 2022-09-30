import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode() {
    setDarkMode((prevState) => !prevState);
    console.log(darkMode);
  }

  return (
    <div className={darkMode ? "container" : "container light"}>
      <Header darkMode={darkMode} setDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <Features darkMode={darkMode} />
      <Partners darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
