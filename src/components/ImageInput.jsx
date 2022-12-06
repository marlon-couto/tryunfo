import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageInput extends Component {
  render() {
    const { image, handleChange } = this.props;

    return (
      <label htmlFor="image">
        Imagem da carta
        <input
          type="text"
          name="image"
          id="image"
          data-testid="image-input"
          value={ image }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImageInput.propTypes = {
  image: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
