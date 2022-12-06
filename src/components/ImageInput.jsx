import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageInput extends Component {
  render() {
    const { cardImage, onInputChange } = this.props;

    return (
      <label htmlFor="cardImage">
        Imagem da carta
        <input
          type="text"
          name="cardImage"
          id="cardImage"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

ImageInput.propTypes = {
  cardImage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
