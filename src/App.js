import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/common/navbar";
import NavBack from "./components/common/navback";

import Hero from "./components/common/hero";
import Page from "./components/page";

import dtpLogo from "./components/images/logoDTP.png";

class App extends React.Component {
  state = {
    isMenuVisible: false,
    offsetY: 0,
  };

  setMenuVisibility = () => {
    let result = { ...this.state };
    result.isMenuVisible = !this.state.isMenuVisible;
    this.setState(result);
  };

  handleScroll = () => {
    let result = { ...this.state };
    result.offsetY = window.pageYOffset;
    this.setState(result);
  };

  resetScroll = () => {
    window.scrollY(0);
    let result = { ...this.state };
    result.isMenuVisible = false;
    this.setState(result);
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { isMenuVisible: toggle, offsetY } = this.state;
    return (
      <>
        <NavBar
          toggle={toggle}
          offsetY={offsetY}
          onToggle={this.setMenuVisibility}
          onReset={this.resetScroll}
        />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="page"
            element={
              <>
                <NavBack toggle={toggle} />
                <Page />
              </>
            }
          />
        </Routes>

        <div className="footer">
          <img
            className="dtpLogo"
            src={dtpLogo}
            alt="Danube Transnational Programme logo"
          />
          <div className="funding">
            Project is co-funded by the European Union funds (ERDF,IPA)
          </div>
        </div>
      </>
    );
  }
}
export default App;
