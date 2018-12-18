import React, { Component } from "react";

class Decrementor extends Component {
  render() {
    const { decrease } = this.props;
    return (
      <button onClick={decrease}>
        --
      </button>
    )
  }
}

export default Decrementor;
