import React, { Component } from 'react';

import NameInput from './NameInput';
import DescriptionInput from './DescriptionInput';
import FirstAttributeInput from './FirstAttributeInput';
import SecondAttributeInput from './SecondAttributeInput';
import ThirdAttributeInput from './ThirdAttributeInput';
import ImageInput from './ImageInput';
import SelectInput from './SelectInput';
import TrunfoCheckbox from './TrunfoCheckbox';
import SaveButton from './SaveButton';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      trunfo: false,
      selection: 'normal',
      image: '',
      firstAttribute: 0,
      secondAttribute: 0,
      thirdAttribute: 0,
      description: '',
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checked' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      trunfo,
      selection,
      image,
      name,
      description,
      firstAttribute,
      secondAttribute,
      thirdAttribute,
    } = this.state;

    return (
      <form>
        <fieldset>
          <legend>Adicione nova carta</legend>

          <NameInput
            name={ name }
            handleChange={ this.handleChange }
          />

          <DescriptionInput
            description={ description }
            handleChange={ this.handleChange }
          />

          <FirstAttributeInput
            firstAttribute={ firstAttribute }
            handleChange={ this.handleChange }
          />

          <SecondAttributeInput
            secondAttribute={ secondAttribute }
            handleChange={ this.handleChange }
          />

          <ThirdAttributeInput
            thirdAttribute={ thirdAttribute }
            handleChange={ this.handleChange }
          />

          <ImageInput
            image={ image }
            handleChange={ this.handleChange }
          />

          <SelectInput
            selection={ selection }
            handleChange={ this.handleChange }
          />

          <TrunfoCheckbox
            trunfo={ trunfo }
            handleChange={ this.handleChange }
          />

          <SaveButton />
        </fieldset>
      </form>
    );
  }
}
