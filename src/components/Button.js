import React, { Component } from "react";
import './Button.css';

// Operators in a different color than the digits 
// NaN = Not-a-number. If it isn't a number, make it colored. 
// i!sNan(val) if it's not a number 

class Button extends Component {
 
  isOperator = val => {
    return !isNaN(val);
  };
  
  
// gets all digits from button, import eveything inside the {} to app.
// creates a new function through the function isOperator above 
// "" is empty for not add any styling. If it's a operator add a class. 

  render() {
    return(
    <div 
      className={`Button ${this.isOperator
        (this.props.children) ? "" : "operator"}`}
        onClick={() => this.props.handleClick(this.props.children)}
     >
     {this.props.children} 
     </div>
    )
  }
}

export default Button;
