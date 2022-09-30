import React from "react";

function Hero(props) {
  return (
    <section
      className={
        props.darkMode ? "wrapper hero flex" : "wrapper hero flex light"
      }
    >
      <h1>
        Work at the speed <br />
        of thought
      </h1>
      <p>You can switch to light mode by clicking the sun button</p>
      <div className="hero-cta">
        <button>Let's Talk</button>
      </div>
      <img src="../public/webdesign.png" alt="" />
    </section>
  );
}

export default Hero;
