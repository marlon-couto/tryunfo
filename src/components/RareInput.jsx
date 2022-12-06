import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RareInput extends Component {
  render() {
    const { onInputChange, cardRare } = this.props;

    return (
      <label htmlFor="cardRare">
        Selecione a raridade da carta
        <select
          name="cardRare"
          id="cardRare"
          onChange={ onInputChange }
          data-testid="rare-input"
          value={ cardRare }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
      </label>
    );
  }
}

RareInput.propTypes = {
  cardRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
