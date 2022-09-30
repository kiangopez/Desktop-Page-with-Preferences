import React from "react";

function Header(props) {
  return (
    <header className={props.darkMode ? "wrapper flex" : "wrapper flex light"}>
      <div className="logo">dimmed</div>
      <ul className={props.darkMode ? "flex" : " flex light-text"}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button
        className={props.darkMode ? "" : "light"}
        onClick={props.setDarkMode}
      >
        {props.darkMode ? (
          <ion-icon name="sunny-sharp" title="Light"></ion-icon>
        ) : (
          <ion-icon name="moon-sharp"></ion-icon>
        )}
      </button>
    </header>
  );
}

export default Header;
