import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardAttrInput2 extends Component {
  render() {
    const { cardAttr2, onInputChange } = this.props;

    return (
      <label htmlFor="cardAttr2">
        Segundo atributo
        <input
          type="number"
          name="cardAttr2"
          id="cardAttr2"
          data-testid="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

CardAttrInput2.propTypes = {
  cardAttr2: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
