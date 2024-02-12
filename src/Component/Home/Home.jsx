import React, { Component } from "react";
import Underline from "../underline/Underline";
import myphoto from "./Imgs/avataaars.svg";
import "./Home.css";
export default class Home extends Component {
  componentDidMount() {
    document.title = "Home";
  }
  render() {
    return (
      <>
        <section  className="home-content col-md-12 m-0 py-5 d-flex flex-column justify-content-center">
          <div className="mx-auto my-3 profile-container w-25 d-flex justify-content-center">
            <img src={myphoto} alt="my" className="w-75" />
          </div>
        <div className="profile-caption-container text-center">
        <h1>Start frmework</h1>
          <Underline />
          <p className="m-0">Graphic Artist - Web Designer - Illustrator</p>
        </div>
        </section>
      </>
    );
  }
}
