import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardAttrInput1 extends Component {
  render() {
    const { cardAttr1, onInputChange } = this.props;

    return (
      <label htmlFor="cardAttr1">
        Primeiro atributo
        <input
          type="number"
          name="cardAttr1"
          id="cardAttr1"
          data-testid="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

CardAttrInput1.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
