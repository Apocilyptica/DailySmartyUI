import React, { Component } from "react";
import dsLogo from "../../static/assets/logo/ds_circle_logo.png";
import { Link } from "react-router-dom";

class Logo extends Component {
  render() {
    const size = {
      height: this.props.size ? this.props.size : 105,
      width: this.props.size ? this.props.size : 105,
    };
    return (
      <div className="logo-main">
        <Link to="/">
          <img style={size} alt="daily smarty ui image logo big" src={dsLogo} />
        </Link>
      </div>
    );
  }
}

export default Logo;
