import React from "react";
import mapi from "./images/logos/mapi.png";
import mintrans from "./images/logos/mintrans.png";
import mintur from "./images/logos/mintur.png";
import mosv from "./images/logos/mosv.png";
import mrrb from "./images/logos/mrrb.png";
import pp1 from "./images/logos/pp1.png";
import pp2 from "./images/logos/pp2.png";
import pp3 from "./images/logos/pp3.png";
import pp4 from "./images/logos/pp4.png";
import pp5 from "./images/logos/pp5.png";
import pp6 from "./images/logos/pp6.png";
import pp7 from "./images/logos/pp7.png";
import pp8 from "./images/logos/pp8.png";
import pp9 from "./images/logos/pp9.png";
import sub from "./images/logos/sub.png";
import sflgr from "./images/logos/sflgr.png";
import velobfk from "./images/logos/velobfk.png";
import veloekoobshtnost from "./images/logos/veloekoobshtnost.png";
import veloevolucia from "./images/logos/veloevolucia.png";
import veloruse from "./images/logos/veloruse.png";
import veloustrem from "./images/logos/veloustrem.png";

export default function Partners() {
  return (
    <>
      <h2 className="section heading">Институционални партньори</h2>
      <div className="block_offset card_container">
        <div className="logo">
          <img src={mintur} alt="" className="horizontal_logo" />
        </div>
        <div className="logo">
          <img src={mrrb} alt="" className="horizontal_logo" />
        </div>
        <div className="logo">
          <img src={mintrans} alt="" className="horizontal_logo" />
        </div>
        <div className="logo">
          <img src={mosv} alt="" className="horizontal_logo" />
        </div>
        <div className="logo">
          <img src={mapi} alt="" className="horizontal_logo" />
        </div>
      </div>
      <hr />
      <h2 className="section heading">Неправителствени организации</h2>
      <div className="block_offset card_container">
        <div className="logo">
          <img src={pp6} alt="" className="horizontal_logo" />
        </div>
        <div className="logo">
          <img src={veloevolucia} alt="" className="horizontal_logo" />
        </div>
        <div className="logo">
          <img src={sub} alt="" className="horizontal_logo" />
        </div>
        <div className="logo">
          <img src={sflgr} alt="" className="horizontal_logo" />
        </div>
        <div className="logo">
          <img src={veloustrem} alt="" className="horizontal_logo" />
        </div>
        <div className="logo">
          <img src={veloruse} alt="" className="horizontal_logo" />
        </div>
        <div className="logo">
          <img src={veloekoobshtnost} alt="" className="horizontal_logo" />
        </div>
        <div className="logo">
          <img src={velobfk} alt="" className="horizontal_logo" />
        </div>
      </div>
      <hr />
      <h2 className="section heading">Международни партньори</h2>
      <div className="block_offset card_container">
        <div className="logo">
          <img src={pp1} alt="" className="horizontal_logo" />
        </div>
        <div className="logo">
          <img src={pp2} alt="" className="horizontal_logo" />
        </div>
        <div className="logo">
          <img src={pp3} alt="" className="horizontal_logo" />
        </div>
        <div className="logo">
          <img src={pp4} alt="" className="horizontal_logo" />
        </div>
        <div className="logo">
          <img src={pp5} alt="" className="horizontal_logo" />
        </div>
        <div className="logo">
          <img src={pp7} alt="" className="horizontal_logo" />
        </div>
        <div className="logo">
          <img src={pp8} alt="" className="horizontal_logo" />
        </div>
        <div className="logo">
          <img src={pp9} alt="" className="horizontal_logo" />
        </div>
      </div>
      <hr />
    </>
  );
}
