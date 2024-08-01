import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // State seharusnya berupa objek
  }

  hi = () => {
    console.log(this.state.count); // Mengakses state dengan benar
  };

  render() {
    return (
      <div>
        <p>Current count: {this.state.count}</p>
        <button onClick={this.hi}>Show Count</button>
      </div>
    );
  }
}

export default Counter;
