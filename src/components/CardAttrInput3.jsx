import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardAttrInput3 extends Component {
  render() {
    const { cardAttr3, onInputChange } = this.props;

    return (
      <label htmlFor="cardAttr3">
        Terceiro atributo
        <input
          type="number"
          name="cardAttr3"
          id="cardAttr3"
          data-testid="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

CardAttrInput3.propTypes = {
  cardAttr3: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
