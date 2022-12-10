import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NameFilter extends Component {
  render() {
    const { setFilter } = this.props;

    return (
      <input
        type="text"
        name="nameFilter"
        id="nameFilter"
        data-testid="name-filter"
        onChange={ setFilter }
      />
    );
  }
}

NameFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
