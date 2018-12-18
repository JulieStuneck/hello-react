import React, { Component } from "react";

class CounterDisplay extends Component {
  render() {
    return (
      <div>
        {this.props.current}
      </div>
    );
  }
}

export default CounterDisplay;
