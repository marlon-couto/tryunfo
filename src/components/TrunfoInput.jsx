import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TrunfoInput extends Component {
  render() {
    const { onInputChange, cardTrunfo } = this.props;

    return (
      <label htmlFor="cardTrunfo">
        A carta é o Super Trunfo?
        <input
          type="checkbox"
          name="cardTrunfo"
          id="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          data-testid="trunfo-input"
        />
      </label>
    );
  }
}

TrunfoInput.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
