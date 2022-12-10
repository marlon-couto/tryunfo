import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NameFilter from './NameFilter';
import RareFilter from './RareFilter';
import RemoveButton from './RemoveButton';
import TrunfoFilter from './TrunfoFilter';
import Card from './Card';

export default class SavedCards extends Component {
  render() {
    const {
      setFilterName,
      filterName,
      setFilterRare,
      filterRare,
      onRemoveButtonClick,
      filterCardName,
      filterCardRare,
      filterTrunfo,
      setFilterTrunfo,
      filterCardTrunfo,
    } = this.props;

    const filteredCards = filterCardRare(filterCardName());
    const trunfo = filterCardTrunfo();

    return (
      <div>
        <NameFilter
          setFilterName={ setFilterName }
          filterName={ filterName }
          filterTrunfo={ filterTrunfo }
        />

        <RareFilter
          setFilterRare={ setFilterRare }
          filterRare={ filterRare }
          filterTrunfo={ filterTrunfo }
        />

        <TrunfoFilter
          setFilterTrunfo={ setFilterTrunfo }
          filterTrunfo={ filterTrunfo }
        />

        {filterTrunfo ? (
          <Card
            cardTrunfo={ trunfo.cardTrunfo }
            cardRare={ trunfo.cardRare }
            cardImage={ trunfo.cardImage }
            cardName={ trunfo.cardName }
            cardDescription={ trunfo.cardDescription }
            cardAttr1={ trunfo.cardAttr1 }
            cardAttr2={ trunfo.cardAttr2 }
            cardAttr3={ trunfo.cardAttr3 }
          />
        ) : (
          filteredCards.map((savedCard) => (
            <div key={ savedCard.cardName }>
              <Card
                cardTrunfo={ savedCard.cardTrunfo }
                cardRare={ savedCard.cardRare }
                cardImage={ savedCard.cardImage }
                cardName={ savedCard.cardName }
                cardDescription={ savedCard.cardDescription }
                cardAttr1={ savedCard.cardAttr1 }
                cardAttr2={ savedCard.cardAttr2 }
                cardAttr3={ savedCard.cardAttr3 }
              />

              <RemoveButton
                onRemoveButtonClick={ () => onRemoveButtonClick(
                  savedCard.cardName,
                  savedCard.cardTrunfo,
                ) }
              />
            </div>
          ))
        )}
      </div>
    );
  }
}

SavedCards.propTypes = {
  setFilterName: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  setFilterTrunfo: PropTypes.func.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
  setFilterRare: PropTypes.func.isRequired,
  onRemoveButtonClick: PropTypes.func.isRequired,
  filterCardRare: PropTypes.func.isRequired,
  filterCardName: PropTypes.func.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterCardTrunfo: PropTypes.func.isRequired,
};
