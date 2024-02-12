import React, { Component } from "react";
import Underline from "./../underline/Underline";
import "./About.css"

export default class extends Component {
  componentDidMount() {
    document.title = "About";
  }
  render() {
    return (
      <>
        <div className="about-content py-5 my-0 text-white d-flex align-items-center" >
          <div className="container p-5">
          <h1 className="text-center">ABOUT COMPONENT</h1>
          <Underline />
          <div className="row m-0 mt-2 row-gap-3">
            <div className="col-md-6">
             <p> Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.</p>
            </div>
            <div className="col-md-6">
              <p>Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.</p>
            </div>
          </div>
          </div>
        </div>
      </>
    );
  }
}
