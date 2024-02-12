import React, { Component } from "react";
import "./ErrorPage.css";
import errPic from "../../7740133_3737256.svg";
export default class ErrorPage extends Component {
  componentDidMount() {
    document.title = "Not Founf";
  }
  render() {
    return (
      <>
        <div className="p-3 error404 d-flex w-100 justify-content-center align-items-center">
          <img src={errPic} alt="" />
        </div>
      </>
    );
  }
}
