import React, { Component } from "react";
import './ClearButton.css';

// onClick passed in a method, onClick use this props that is passed in function handleClear
// this.props.children in input to show the digits 

class ClearButton extends Component {
 
  render() {
    return(
        <div className="ClearButton" onClick={() => this.props.handleClear()}>
        {this.props.children}
        </div>
    )
  }
}

export default ClearButton;