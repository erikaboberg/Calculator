import React, { Component } from "react";
import './Input.css';

// this.props.children in the input to show the digits 

class Input extends Component {
 
  render() {
    return(
        <div className="Input">
        {this.props.children}
        </div>
    )
  }
}

export default Input;