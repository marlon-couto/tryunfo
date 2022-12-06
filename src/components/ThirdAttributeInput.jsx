import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ThirdAttributeInput extends Component {
  render() {
    const { thirdAttribute, handleChange } = this.props;

    return (
      <label htmlFor="third-attribute">
        Terceiro atributo
        <input
          type="number"
          name="third-attribute"
          id="third-attribute"
          data-testid="attr3-input"
          value={ thirdAttribute }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ThirdAttributeInput.propTypes = {
  thirdAttribute: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
