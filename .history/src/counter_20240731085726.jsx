import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { currentValue: 0, totalValue: 0 };
    this.number = [1, 2, 3, 4, 5];
  }

  counterUp = () => {
    const total = this.number.reduce(
      (heap, num) => heap + (num % 2 === 0 ? 2 : 3),
      this.state
    );
    this.setState({ currentValue: total, totalValue: total });
    return total;
  };
  counterDown = () => {
    const decrese = this.setState({
      currentValue: this.state.currentValue - this.state.totalValue,
    });
    return decrese;
  };

  render() {
   return (
    <>
      <p className="count">{this.}</p>
      <div className="box-buttons">
        <button className="add" onClick={this.counterUp}>add</button>
        <button className="min" onClick={this.counterDown}>min</button>
      </div>
    </>
   ) 
  }
}

export default Counter;
