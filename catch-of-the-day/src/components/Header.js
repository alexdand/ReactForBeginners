import React from "react";
import PropTypes from "prop-types";

const Header = ({ tagline }) => (
  <header className="top">
    <h1>
      Catch <span className="ofThe">of the</span> day
    </h1>
    <h3 className="tagline">
      <span>{tagline}</span>
    </h3>
  </header>
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired
};

export default Header;
