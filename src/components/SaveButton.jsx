import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SaveButton extends Component {
  render() {
    const { onSaveButtonClick, isSaveButtonDisabled } = this.props;

    return (
      <button
        type="button"
        id="saveButton"
        data-testid="save-button"
        disabled={ isSaveButtonDisabled }
        onClick={ onSaveButtonClick }
      >
        Salvar
      </button>
    );
  }
}

SaveButton.propTypes = {
  onSaveButtonClick: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
};
