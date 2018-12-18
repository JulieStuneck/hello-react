import React, { Component } from "react";

class Incrementor extends Component {
  render() {
    const { increase } = this.props;
    return (
      <button onClick={increase}>
        ++
      </button>
    );
  }
}

export default Incrementor;
