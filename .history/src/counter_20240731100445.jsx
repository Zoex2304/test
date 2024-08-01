import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { currentValue: 0, totalValue: 0 };
  }

  calculateValues = () => {
    const number = this.props.number; // Menggunakan array yang diterima dari props
    const totalValue = number.reduce(
      (heap, num) => heap + (num % 2 === 0 ? 2 : 3),
      0
    );

    const total = number.reduce(
      (heap, num) => heap + (num % 2 === 0 ? 2 : 3),
      this.state.currentValue
    );

    return { total, totalValue };
  };

  counterUp = () => {
    const { total, totalValue } = this.calculateValues();
    this.setState({ currentValue: total, totalValue });
  };

  counterDown = () => {
    const { totalValue } = this.calculateValues();
    this.setState({
      currentValue: this.state.currentValue - totalValue,
    });
  };

  render() {
    return (
      <>
        <p className="count">{this.state.currentValue}</p>
        <div className="box-buttons">
          <button className="add" onClick={this.counterUp}>Add</button>
          <button className="min" onClick={this.counterDown}>Min</button>
        </div>
      </>
    );
  }
}

export default Counter;
