import React, { Component } from "react";
import "./Contact.css";
import Underline from "./../underline/Underline";

export default class Contact extends Component {
  componentDidMount() {
    document.title = "Contact";
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="contact-header text-center text-uppercase p-4">
            <h1>CONATCT SECTION</h1>
            <Underline className="dark" />
          </div>
          <div className="contact-form p-5">
            <form action="" className="d-flex flex-column align-items-center">
              <input onInput={()=>{}} type="text" placeholder="Your Name" className="col-md-7 p-2 m-3 border-0 " />
              <input type="text" placeholder="Your Age" className="col-md-7 p-2 m-3 border-0 " />
              <input type="text" placeholder="Your Email" className="col-md-7 p-2 m-3 border-0 " />
              <input type="text" placeholder="Your Password" className="col-md-7 p-2 m-3 border-0 " />
              <div className="btn col-md-7  d-flex">
              <input className="" type="submit" value="Send Message" />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
