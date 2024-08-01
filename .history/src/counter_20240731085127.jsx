import { Component } from "react";

class Counter extends Component{
  constructor(props){
    super(props)
    this.state = {currentValue : 0,totalValue : 0}
    this.number = [1,2,3,4,5]
  }
  
  counterUp = () => {
    const total = this.number.reduce((heap,num) => heap + (num % 2 === 0 ? 2 : 3),this.state)
    this.setState({currentValue : total,totalValue})
    this.state.currentValue = total
    return total
  }
  counterDown = () => {
    const decrese = this.
  }

}

export default Counter