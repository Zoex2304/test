import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    this.state = {
      currValue: 0,
    };
  }

  counter = () => {
    const number = [1, 2, 3, 4, 5];
    const result = number.reduce((acc, item) => {
      return acc + (item % 2 === 0 ? 2 : 3);
    }, this.state.currValue);
    this.setState({ currValue: result });
  };

  counterDown = () => {
    const number = [1, 2, 3, 4, 5];
    const result = number.reduce((acc, item) => {
      return acc + (item % 2 === 0 ? 2 : 3);
    }, 0);
    this.setState({ currValue: this.state.currValue === 0 ? 0 : this.state.currValue - result });
  };

  render() {
    return (
      <div>
        <button onClick={this.counter}>Add</button>
        <button onClick={this.counterDown}>Min</button>
        <p>{this.state.currValue}</p>
      </div>
    );
  }
}

export default Counter;
