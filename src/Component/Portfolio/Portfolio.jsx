import React, { Component } from "react";
import Underline from "./../underline/Underline";
import "./Portfolio.css";
import img1 from "../../poert1.png";
import img2 from "../../port2.png";
import img3 from "../../port3.png";
import Portfolio_Card from "../Portfolio_Card/Portfolio_Card";
import Portfolio_Modal from "../Portfolio_Modal/Portfolio_Modal";

export default class Portfolio extends Component {
  componentDidMount() {
    document.title = "Portfolio";
  }
  state = {
    displayModal: false,
    img_src: "",
  };

  toggleModal = (src) => {
    this.setState({ img_src: src });
    this.setState({ displayModal: true });
  };

  closeModal = (e) => {
    if (e.target.tagName !== "IMG") {
      this.setState({ displayModal: false });
      this.setState({ img_src: "" });
    }
  };

  render() {
    return (
      <>
        <div className="portfolio-Content my-3">
          <div className="portfolio-heading p-4">
            <h1 className="text-center">PORTFOLIO COMPONENT</h1>
            <Underline className="dark" />
          </div>
          <div className="container">
            <div className="row g-4">
              <Portfolio_Card source={img1} modal={this.toggleModal} />
              <Portfolio_Card source={img2} modal={this.toggleModal} />
              <Portfolio_Card source={img3} modal={this.toggleModal} />
              <Portfolio_Card source={img1} modal={this.toggleModal} />
              <Portfolio_Card source={img2} modal={this.toggleModal} />
              <Portfolio_Card source={img3} modal={this.toggleModal} />
            </div>
          </div>
        </div>
        {this.state.displayModal && (
          <Portfolio_Modal
            source={this.state.img_src}
            closeModal={this.closeModal}
          />
        )}
      </>
    );
  }
}
