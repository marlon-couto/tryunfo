import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NameFilter extends Component {
  render() {
    const { setFilterName, filterName, filterTrunfo } = this.props;

    return (
      <label htmlFor="nameFilter">
        Filtre as cartas por nome:
        <input
          type="text"
          name="nameFilter"
          id="nameFilter"
          data-testid="name-filter"
          onChange={ setFilterName }
          value={ filterName }
          disabled={ filterTrunfo }
        />
      </label>
    );
  }
}

NameFilter.propTypes = {
  setFilterName: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
};
