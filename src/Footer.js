import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { year } = this.props;
    return <footer>&copy; {year} Foo Industries</footer>;
  }
}

export default Footer;
