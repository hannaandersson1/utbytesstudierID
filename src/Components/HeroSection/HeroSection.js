import React, { Component } from "react";
import "./HeroSection.scss";

class HeroSection extends Component {
  state = {};
  render() {
    return (
      <div className="hero-page">
        <div className="hero-text">
          <h1 id="hero-h1">ID UTBYTESSTUDIER</h1>
          <h2 id="hero-h2">
            Som utbytesstudent spenderar du en termin eller ett läsår vid ett av
            <br />
            Umeå universitets partneruniversitet runt om i världen. <br />
            vart vill du åka?
          </h2>
        </div>
        <form
          id="hero-form"
          action="https://ioportal.db.umu.se/avtal/visa_avtal.php"
        >
          <button id="hero-button" type="submit">
            Destinationer
          </button>
        </form>
      </div>
    );
  }
}

export default HeroSection;