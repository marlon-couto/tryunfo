import React, { Component } from 'react';

export default class SaveButton extends Component {
  render() {
    return (
      <button
        type="button"
        id="save-button"
        data-testid="save-button"
      >
        Salvar
      </button>
    );
  }
}
