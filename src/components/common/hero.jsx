import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import hero from "../images/hero.png";

export default function Hero() {
  return (
    <Fragment>
      <div className="copy">
        <h1 className="headline">Имаме план за повече хора на велосипеди</h1>
        <Link className="menu_link" to="page">
          <button className="btn_arrow">Виж напредъка</button>
        </Link>
      </div>
      <img className="img_hero" src={hero} alt="" />
    </Fragment>
  );
}
