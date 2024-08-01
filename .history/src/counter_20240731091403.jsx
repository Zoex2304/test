import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { currentValue: 0 };
    this.totalValueStartFromZero = 0;
    this.number = [1, 2, 3, 4, 5];
  }

  counterUp = () => {
    const total = this.number.reduce(
      (heap, num) => heap + (num % 2 === 0 ? 2 : 3),
      this.state.currentValue
    );
    
    this.totalValueStartFromZero = this.number.reduce(
      (heap, num) => heap + (num % 2 === 0 ? 2 : 3),
      0
    );
    this.setState({currentValue : total})
  };
  counterDown = () => {
    this.setState({
      currentValue: this.state.currentValue - (this.state.currentValue === 0 ? 0 : this.totalValueStartFromZero),
    });
  };

  render() {
    return (
      <>
        <p className="count">{this.state.currentValue}</p>
        <div className="box-buttons">
          <button className="add" onClick={this.counterUp}>
            add
          </button>
          <button className="min" onClick={this.counterDown}>
            min
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
