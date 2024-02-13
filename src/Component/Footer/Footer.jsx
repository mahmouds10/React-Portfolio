import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer  className="d-flex flex-column
       text-center ">
        <div className="upper-footer py-5 px-5">
          <div className="row row-gap-4 align-items-center m-0">
            <div className="col-md-4">
              <h2>location</h2>
              <p>10 luka Modric</p>
              <p>Madrid, UCL 14</p>
            </div>
            <div className="col-md-4">
              <h2>AROUND THE WEB</h2>
              <ul className="list-unstyled d-flex col-12 justify-content-center gap-2 h5 my-3">
              <div className="link-container">
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100071474855041">
                  <li>
                    <i className="fa-brands fa-facebook"></i>
                  </li>
                </a>
              </div>
              <div className="link-container">
              <a target="_blank" href="https://github.com/mahmouds10">
                  <li>
                    <i className="fa-brands fa-github"></i>
                  </li>
                </a>
              </div>
              <div className="link-container">
              <a target="_blank" href="https://www.linkedin.com/in/mahmoud-sayed-15a66a2a8/">
                  <li>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </li>
                </a>
              </div>
              <div className="link-container">
              <a target="_blank" href="tel:01101804085">
                  <li>
                    <i className="fa-brands fa-whatsapp"></i>
                  </li>
                </a>
              </div>

              </ul>
            </div>
            <div className="col-md-4">
            <h2>ABOUT FREELANCER</h2>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
        <div className="lower-footer col-md-12">
          Copyright © Your Website 2021
        </div>
      </footer>
    </>
  );
}
