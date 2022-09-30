import React from "react";

function Footer(props) {
  return (
    <footer className={props.darkMode ? "" : "light"}>
      <div className="links">
        <div className={props.darkMode ? "link" : "link light"}>
          <h5>DIMMED</h5>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Examples</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Updates</a>
            </li>
          </ul>
        </div>
        <div className={props.darkMode ? "link" : "link light"}>
          <h5>Resources</h5>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Examples</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Updates</a>
            </li>
          </ul>
        </div>
        <div className={props.darkMode ? "link" : "link light"}>
          <h5>About</h5>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Examples</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Updates</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact">
        <div className="contact-info">
          <p>
            <ion-icon name="mail-sharp"></ion-icon> kianbgopez@gmail.com
          </p>
          <p>
            <ion-icon name="phone-portrait-sharp"></ion-icon> 0927 119 7079
          </p>
        </div>
        <div className="socials">
          <a href="">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a href="">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
