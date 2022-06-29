import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import hamburger from "../images/hamburger.png";

class NavBar extends Component {
  render() {
    const { toggle, offsetY, onToggle, onReset } = this.props;
    const ham =
      offsetY < 45
        ? {}
        : {
            top: `${/*offsetY*/ -10}px`,
            backgroundColor: "#b8b883",
            maxWidth: "1300px",
          };

    return (
      <header>
        <div className="header" style={ham}>
          <img
            className="clickable hamburger"
            src={hamburger}
            alt="Icon to open the menu"
            onClick={onToggle}
          />

          <Link to="/" onClick={onReset}>
            <img className="img_logo" src={logo} alt="" />
          </Link>

          <nav
            className={
              toggle ? "container_menu" : "container_menu container_hidden"
            }
          >
            <div className="item">
              <Link to="page" className="menu_link" onClick={onReset}>
                План
              </Link>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default NavBar;
