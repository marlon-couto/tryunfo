import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NameInput extends Component {
  render() {
    const { name, handleChange } = this.props;

    return (
      <label htmlFor="name">
        Nome da carta
        <input
          type="text"
          name="name"
          id="name"
          data-testid="name-input"
          value={ name }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

NameInput.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
