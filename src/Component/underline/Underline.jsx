
import React, { Component } from 'react'
import "./underline.css"
export default class Underline extends Component {
  render() {
    return (
        <>
            <div className= {`underLine ` + this.props.className}>
                <span className='star-container'>
                <i className='fa-solid fa-star'></i>
                </span>
            </div>
        </>
    )
  }
}
