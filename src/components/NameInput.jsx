import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NameInput extends Component {
  render() {
    const { cardName, onInputChange } = this.props;

    return (
      <label htmlFor="cardName">
        Nome da carta
        <input
          type="text"
          name="cardName"
          id="cardName"
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

NameInput.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
