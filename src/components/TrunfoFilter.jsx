import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TrunfoFilter extends Component {
  render() {
    const { filterTrunfo, setFilterTrunfo } = this.props;

    return (
      <label htmlFor="trunfoFilter">
        Super Trunfo
        <input
          type="checkbox"
          name="trunfoFilter"
          id="trunfoFilter"
          data-testid="trunfo-filter"
          onChange={ setFilterTrunfo }
          value={ filterTrunfo }
        />
      </label>
    );
  }
}

TrunfoFilter.propTypes = {
  filterTrunfo: PropTypes.bool.isRequired,
  setFilterTrunfo: PropTypes.func.isRequired,
};
