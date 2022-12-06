import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SecondAttributeInput extends Component {
  render() {
    const { secondAttribute, handleChange } = this.props;

    return (
      <label htmlFor="second-attribute">
        Segundo atributo
        <input
          type="number"
          name="second-attribute"
          id="second-attribute"
          data-testid="attr2-input"
          value={ secondAttribute }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

SecondAttributeInput.propTypes = {
  secondAttribute: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
