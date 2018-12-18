import React, { Component } from "react";
import Decrementor from "./Decrementor";
import CounterDisplay from "./CounterDisplay";
import Incrementor from "./Incrementor";
import './Counter.css';

class Counter extends Component {
  constructor() {
    super();
    this.state = { current: 0 };
  }
  decrement = () => {
    this.setState({ current: this.state.current - 1 });
  }
  increment = () => {
    this.setState({ current: this.state.current + 1 });
  }
  render() {
    return (
      <div className="container">
        <Decrementor decrease={this.decrement} />
        <CounterDisplay current={this.state.current} />
        <Incrementor increase={this.increment} />
      </div>
    );
  }
}

export default Counter;
