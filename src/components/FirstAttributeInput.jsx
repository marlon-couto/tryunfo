import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FirstAttributeInput extends Component {
  render() {
    const { firstAttribute, handleChange } = this.props;

    return (
      <label htmlFor="first-attribute">
        Primeiro atributo
        <input
          type="number"
          name="first-attribute"
          id="first-attribute"
          data-testid="attr1-input"
          value={ firstAttribute }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

FirstAttributeInput.propTypes = {
  firstAttribute: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
