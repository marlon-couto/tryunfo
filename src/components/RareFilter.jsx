import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RareFilter extends Component {
  render() {
    const { setFilterRare, filterRare, filterTrunfo } = this.props;

    return (
      <label htmlFor="rareFilter">
        Filtre as cartas por raridade:
        <select
          name="rareFilter"
          id="rareFilter"
          data-testid="rare-filter"
          onChange={ setFilterRare }
          value={ filterRare }
          disabled={ filterTrunfo }
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
      </label>
    );
  }
}

RareFilter.propTypes = {
  setFilterRare: PropTypes.func.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
};
