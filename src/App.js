import React, { Component } from "react";
import './App.css';
import Button from './components/Button'; 
import Input from './components/Input';
import ClearButton from './components/ClearButton';


class App extends Component {


  // Constructor used for initial the state
  // Super refers to the parents class constructor (necessary for the constructor to initilaize this.props)
  // this.state is where the data comes from
  // For the setState, container for holding the state together. 

  constructor(props) {
    super(props);

    this.state = {
      input: "",
      operator: ""
    };
  }
    // this.setState() method is used to update the state.
    // Value passed in to this function from the button children area with handleclick
    addToInput = val => {
      this.setState({ input: this.state.input + val });
    }

    // If this.state.input is not empty then add zero
    // If this.state.input is not blank (another number has already been added in)
    addZeroToInput = val => {
      if (this.state.input !== "") {
        this.setState({ input: this.state.input + val });
       }
      };

    // Input = blank 
    clearInput = () => {
      this.setState({ input: "" });
    };

    // First I tried to solve the add and multiply functions this way. But here I having a issue parse the 
    // input digits to the chosen operator.  The result add the input together but dosen't give a single value or the value that I want. 
  
    
    // add = () => {
    //   this.setState({ input: ""});
    //   this.state.operator = "plus";
  
    //   if (this.state.operator == "plus") {
    //     this.setState({
    //       input:
    //         parseInt(this.state.input) +
    //         parseInt(this.state.input)
    //     });
    //    }
    //  };


    // Insted I solved it by: 

    // Using Const variable declaration since I'm not going to reassigning new values to the variables. 
    // 1. assigning the variable 
    // 2. parse the input into single digits => done by a string.split (the string is split between each character ('') = 1,1,1,).
    // 3. apply the chosen operator +/* to the parsed digits  => done by a array.reduce (The reduce method reduces the array to a single value).
    // 4. output the result replacing the input with const output that does the function above => done by setState
  
    add = () => {
      const { input } = this.state
      const digits = String(input).split('')
      const output = digits.reduce((sum, digit) => sum + parseInt(digit, 10), 0)
      this.setState({ input: output })
    };


    multiply = () => {
      const { input } = this.state
      const digits = String(input).split('')
      const output = digits.reduce((product, digit) => product * parseInt(digit, 10), 1)
      this.setState({ input: output })
    }

 
  // Using render for sharing code between compontents using props
  // Check the files Button.js (handleClick), ClearButton.js (handleClear) and Input.js (input)

  render() {

  // console.log this.state to see the actions in the console 

  console.log("this.state is: ", this.state)

      return (
        <div className="App">
          <div className="calc-wrapper">

          <div class="description">
          <h1>Calculator</h1>
          <p>Instructions:</p>
          <p>Ex. Insert 2468 press + and the answer should be 20</p>
          <p>Ex. Insert 2359 press * and the answer should be 270</p>
          </div>

          <div className="row">
          <Input>{this.state.input}</Input>
          </div>

  {/* Add a action to the button = handleClick */}
          
            <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
          </div>
          <div className="row">
          <Button handleClick={this.add}>+</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className="row">
          <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div> 

        );
      }
    }

export default App;
