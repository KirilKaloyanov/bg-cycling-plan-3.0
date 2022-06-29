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
            <div className="item">
              <Link to="map" className="menu_link" onClick={onReset}>
                Веломрежа
              </Link>
            </div>
            <div className="item">
              <Link to="conference" className="menu_link" onClick={onReset}>
                Конференция
              </Link>
            </div>
            <div className="item">
              <Link to="partners" className="menu_link" onClick={onReset}>
                Партньори
              </Link>
            </div>
            <div className="item">
              <Link to="ambassadors" className="menu_link" onClick={onReset}>
                Посланици
              </Link>
            </div>
            <div className="item">
              <Link to="library" className="menu_link" onClick={onReset}>
                Библиотека
              </Link>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default NavBar;
