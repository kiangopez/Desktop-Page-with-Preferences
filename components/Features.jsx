import React from "react";

function Features(props) {
  return (
    <section
      className={
        props.darkMode ? "wrapper features flex" : "wrapper features flex light"
      }
    >
      <h3>features</h3>
      <div className="cards flex">
        <div className="card">
          <img src="../public/cloud.png" alt="" />
          <span className="card-title">It's dark!</span>
          <p>I see a man of culture.</p>
        </div>
        <div className="card">
          <img src="../public/cloud3.png" alt="" />
          <span className="card-title">Umm light?</span>
          <p>
            It's understandable but please switch back. Love your eyes more.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
