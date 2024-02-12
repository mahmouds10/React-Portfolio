import React, { Component } from "react";
import "./Portfolio_Modal.css";
export default class Portfolio_Modal extends Component {
  render() {
    return (
      <>
        <div
          className="modal-layer d-flex justify-content-center align-items-center"
          onClick={(e) => {
            this.props.closeModal(e)
          }}
        >
          <img className="w-50" src={this.props.source} alt="imgError" />
        </div>
      </>
    );
  }
}
