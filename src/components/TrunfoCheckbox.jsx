import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TrunfoCheckbox extends Component {
  render() {
    const { handleChange, trunfo } = this.props;

    return (
      <label htmlFor="trunfo">
        A carta é o Super Trunfo?
        <input
          type="checkbox"
          name="trunfo"
          id="trunfo"
          value={ trunfo }
          onChange={ handleChange }
          data-testid="trunfo-input"
        />
      </label>
    );
  }
}

TrunfoCheckbox.propTypes = {
  handleChange: PropTypes.func.isRequired,
  trunfo: PropTypes.bool.isRequired,
};
