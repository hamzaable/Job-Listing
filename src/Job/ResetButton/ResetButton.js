import React, { Component } from "react";
import classes from "./ResetButton.module.css";
class ResetButton extends Component {
  render() {
    return (
      <button className={classes.rstbtn} onClick={this.props.resetAll}>
        Reset...
      </button>
    );
  }
}

export default ResetButton;
