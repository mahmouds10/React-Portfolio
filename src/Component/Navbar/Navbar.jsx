import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav id="nav" className="text-uppercase navbar position-sticky top-0 navbar-expand-lg py-4">
          <div className="container justify-content-between">
            <Link onClick={
              ()=>{
                document.querySelectorAll(".nav-link").forEach((item) => {
                  item.classList.remove("selected");
                });
              }
            } className="navbar-brand" to="/">
              React Portfolio
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end flex-grow-0"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li
                  onClick={function (e) {
                    changeNav(e.target);
                  }}
                  className="nav-item"
                >
                  <Link className="nav-link" aria-current="page" to="about">
                    About
                  </Link>
                </li>
                <li
                  onClick={function (e) {
                    changeNav(e.target);
                  }}
                  className="nav-item"
                >
                  <Link className="nav-link" to="portfolio">
                    Portfolio
                  </Link>
                </li>
                <li
                  onClick={function (e) {
                    changeNav(e.target);
                  }}
                  className="nav-item"
                >
                  <Link className="nav-link" to="contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
window.addEventListener("scroll", () => {
  if (window.scrollY >30) {
    document.getElementById("nav").classList.remove("py-4");
  } else {
    document.getElementById("nav").classList.add("py-4");
  }
});

function changeNav(tar) {
  document.querySelectorAll(".nav-link").forEach((item) => {
    item.classList.remove("selected");
  });
  tar.classList.add("selected");
}
