import React from 'react';
import pokemonList from './js/pokemon';
import PropTypes from 'prop-types';

RightSection.propTypes = {
  pokemonIndex: PropTypes.number,
  setpokemonIndex: PropTypes.func,
  inputValue: PropTypes.number,
  setInputValue: PropTypes.func,
};

function RightSection(props) {
  return (
    <div id="right">
      <div id="info-screen">{getInfoScreenString(props)}</div>
      <div id="keyboard">
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
      </div>
      <div id="leaf-button-right"></div>
      <div id="yellow-button-right"></div>
      <div id="green-button-right"></div>
      <div id="orange-button-right"></div>
      <div id="left-cross-button">
        <div id="leftT"></div>
      </div>
      <div id="right-cross-button">
        <div id="rightT"></div>
      </div>
      <div id="cross-button">
        <div id="left-red-cross"></div>
      </div>
      <div id="square-button-right1"></div>
      <div id="square-button-right2"></div>
    </div>
  );
}

function getInfoScreenString(props) {
  return pokemonList[props.pokemonIndex] || 'this pokemon doesn\'t exist';
}

export default RightSection;
