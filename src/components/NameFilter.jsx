import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NameFilter extends Component {
  render() {
    const { setFilterName } = this.props;

    return (
      <label htmlFor="nameFilter">
        Filtre as cartas por nome:
        <input
          type="text"
          name="nameFilter"
          id="nameFilter"
          data-testid="name-filter"
          onChange={ setFilterName }
        />
      </label>
    );
  }
}

NameFilter.propTypes = {
  setFilterName: PropTypes.func.isRequired,
};
