import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DescriptionInput extends Component {
  render() {
    const { cardDescription, onInputChange } = this.props;

    return (
      <label htmlFor="cardDescription">
        Descrição da carta
        <textarea
          name="cardDescription"
          id="cardDescription"
          rows="5"
          cols="30"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

DescriptionInput.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
