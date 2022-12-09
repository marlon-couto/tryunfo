import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RemoveButton extends Component {
  render() {
    const { onRemoveButtonClick } = this.props;

    return (
      <button
        type="button"
        id="removeButton"
        data-testid="delete-button"
        onClick={ onRemoveButtonClick }
      >
        Excluir
      </button>
    );
  }
}

RemoveButton.propTypes = {
  onRemoveButtonClick: PropTypes.func.isRequired,
};
