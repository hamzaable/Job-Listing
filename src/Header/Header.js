import React, { Component } from "react";
import classes from "./Header.module.css";
import Image from "../HeaderImage/bg-header-desktop.svg";

class Header extends Component {
  render() {
    return (
      <div>
        <img className={classes.header} src={Image} alt="the pic" />
      </div>
    );
  }
}

export default Header;
