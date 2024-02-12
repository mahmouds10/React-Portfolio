import React, { Component } from "react";
import "./Portfolio_Card.css";
export default class Portfolio_Card extends Component {
  render() {
    return (
      <>
        <div className="col-md-4 portfolio-card">
          <div
            className="portfolio-inner position-relative"
            onClick={() => {
              this.props.modal(this.props.source);
            }}
          >
            <img className="w-100" src={this.props.source} alt="" />

            <div className="portfolio-layer h-100 w-100   position-absolute top-0 d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-plus text-white "></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}
