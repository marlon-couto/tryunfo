import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DescriptionInput extends Component {
  render() {
    const { description, handleChange } = this.props;

    return (
      <label htmlFor="description">
        Descrição da carta
        <textarea
          name="description"
          id="description"
          rows="5"
          cols="30"
          data-testid="description-input"
          value={ description }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

DescriptionInput.propTypes = {
  description: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
