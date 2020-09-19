import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://lh3.googleusercontent.com/proxy/Pr7j3uX-6Poahb4gTrFZlO0mmMadDWy_nS9FBnwp3bVPAVSmrieuYj2tfus1E0Bq8vfbQUAQGC4uinGtItchFllKSwSskgysD5wF7hMiAjDDpQVX6tY"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://cdn1.vectorstock.com/i/thumb-large/38/10/solid-purple-gradient-user-icon-web-icon-vector-23623810.jpg"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
