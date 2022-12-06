import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SelectInput extends Component {
  render() {
    const { handleChange, selection } = this.props;

    return (
      <label htmlFor="rarity">
        Selecione a raridade da carta
        <select
          name="rarity"
          id="rarity"
          onChange={ handleChange }
          data-testid="rare-input"
          value={ selection }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  selection: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
