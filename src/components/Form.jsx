import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NameInput from './NameInput';
import DescriptionInput from './DescriptionInput';
import CardAttrInput1 from './CardAttrInput1';
import CardAttrInput2 from './CardAttrInput2';
import CardAttrInput3 from './CardAttrInput3';
import ImageInput from './ImageInput';
import RareInput from './RareInput';
import TrunfoInput from './TrunfoInput';
import SaveButton from './SaveButton';

export default class Form extends Component {
  render() {
    const {
      cardTrunfo,
      cardRare,
      cardImage,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <fieldset>
          <legend>Adicione nova carta</legend>

          <NameInput
            cardName={ cardName }
            onInputChange={ onInputChange }
          />

          <DescriptionInput
            cardDescription={ cardDescription }
            onInputChange={ onInputChange }
          />

          <CardAttrInput1
            cardAttr1={ cardAttr1 }
            onInputChange={ onInputChange }
          />

          <CardAttrInput2
            cardAttr2={ cardAttr2 }
            onInputChange={ onInputChange }
          />

          <CardAttrInput3
            cardAttr3={ cardAttr3 }
            onInputChange={ onInputChange }
          />

          <ImageInput
            cardImage={ cardImage }
            onInputChange={ onInputChange }
          />

          <RareInput
            cardRare={ cardRare }
            onInputChange={ onInputChange }
          />

          <TrunfoInput
            cardTrunfo={ cardTrunfo }
            onInputChange={ onInputChange }
          />

          <SaveButton
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ onSaveButtonClick }
          />
        </fieldset>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
