import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.js";
import Avtal from "./Components/Avtal/Avtal.js";
import Tillgodoraknande from "./Components/Tillgodoraknande/Tillgodoraknande.js";
import Interviews from "./Components/Interviews/Interviews.js";
import InforResa from "./Components/InforResa/InforResa.js";
import FAQ from "./Components/FAQ/FAQ.js";
import Home from "./Components/Home/Home.js";
import SideDrawer from "./Components/SideDrawer/SideDrawer.js";
import "./Components/SideDrawer/SideDrawer.scss";
import Backdrop from "./Components/Backdrop/Backdrop.js";
import Footer from "./Components/Footer/Footer.js";
import $ from "jquery";

let keys = {
  37: 1,
  38: 1,
  39: 1,
  40: 1
};

class App extends Component {
  state = {
    drawerToggled: false,
    dropdownToggled: false
  };

  /*Change the state for the SideDrawer (only displayed on smaller screens).
  If the menu button is clicked the state drawerToggled will be true.
  If the SideDrawer is dropDownOpen the scrolling will be dissabled.*/
  toggleDrawer = e => {
    this.setState(
      prevState => ({
        drawerToggled: !prevState.drawerToggled,
        dropdownToggled: false
      }),
      () => {
        const { drawerToggled } = this.state;
        if (drawerToggled) {
          // this.preventDefault(e)
          this.preventDefaultForScrollKeys(e);
          this.disableScroll();
          $(".side-drawer").addClass("side-drawer-open");
        } else {
          $(".side-drawer").removeClass("side-drawer-open");
          this.enableScroll();
        }
      }
    );
  };

  /*Change the state for the dropdown (only displayed on smaller screens).
  If the "intervjuer" link is clicked the state drawerdownToggled will be true.
  If the dropdown is open the scrolling will be enabled.*/
  toggleDropDown = () => {
    this.setState(
      prevState => ({
        dropdownToggled: !prevState.dropdownToggled
      }),
      () => {
        const { dropdownToggled } = this.state;
        if (dropdownToggled) {
          $(".dropdown").addClass("open");
          this.enableScroll();
        } else {
          $(".dropdown").removeClass("open");
        }
      }
    );
  };

  componentDidUpdate(prevProps, prevState) {
    const { dropdownToggled } = this.state;
    if (prevState.dropdownToggled !== dropdownToggled) {
      if (dropdownToggled) {
        $(".dropdown").addClass("open");
      } else {
        $(".dropdown").removeClass("open");
      }
    }
  }

  preventDefault = e => {
    e = e || window.event;
    if (e.preventDefault) {
      e.preventDefault();
      e.returnValue = false;
    }
  };

  preventDefaultForScrollKeys = e => {
    if (keys[e.keyCode]) {
      this.preventDefault(e);
      return false;
    }
  };

  disableScroll = () => {
    if (window.addEventListener) {
      // older FF
      window.addEventListener("DOMMouseScroll", this.preventDefault, false);
      window.onwheel = this.preventDefault; // modern standard
      window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
      //In order for ontouchmove to work "tou"
      window.ontouchmove = this.preventDefault; // mobile
      document.onkeydown = this.preventDefaultForScrollKeys;
    }
  };

  enableScroll = () => {
    if (window.removeEventListener) {
      window.removeEventListener("DOMMouseScroll", this.preventDefault, false);
      window.onmousewheel = document.onmousewheel = null;
      window.onwheel = null;
      window.ontouchmove = null;
      document.onkeydown = null;
    }
  };

  render() {
    const { drawerToggled } = this.state;
    return (
      <Router>
        <div>
          <header className="App-header">
            <Navbar toggleDrawer={this.toggleDrawer} />
            <SideDrawer
              toggleDrawer={this.toggleDrawer}
              toggleDropDown={this.toggleDropDown}
            />
            {drawerToggled ? <Backdrop toggleDrawer={this.toggleDrawer} /> : []}
          </header>
          <div>
            <Route exact="exact" path="/" component={Home} />
            <Route exact="exact" path="/intervjuer" component={Interviews} />
            <Route exact="exact" path="/avtal" component={Avtal} />
            <Route exact="exact" path="/inforResa" component={InforResa} />
            <Route
              exact="exact"
              path="/tillgodoraknande"
              component={Tillgodoraknande}
            />
            <Route exact="exact" path="/faq" component={FAQ} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
