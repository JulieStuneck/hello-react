import React, { Component } from "react";
import Decrementor from "./Decrementor";
import CounterDisplay from "./CounterDisplay";
import Incrementor from "./Incrementor";

class Counter extends Component {
  constructor() {
    super();
    this.state = { current: 0 };
  }
  increment = () => {
    this.setState({ current: this.state.current + 1 });
  }
  render() {
    return (
      <div>
        <Decrementor />
        <CounterDisplay current={this.state.current} />
        <Incrementor />
      </div>
    );
  }
}

export default Counter;
