import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import RemoveButton from './components/RemoveButton';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardTrunfo: false,
      cardRare: 'normal',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardDescription: '',
      savedCards: [],
    };
  }

  handleErrors = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const minValue = 0;
    const maxValue = 90;
    const maxTotal = 210;

    const number1 = Number(cardAttr1) >= minValue && Number(cardAttr1) <= maxValue;
    const number2 = Number(cardAttr2) >= minValue && Number(cardAttr2) <= maxValue;
    const number3 = Number(cardAttr3) >= minValue && Number(cardAttr3) <= maxValue;

    const totalAttr = Number(cardAttr1)
      + Number(cardAttr2)
      + Number(cardAttr3)
      <= maxTotal;

    const errorCases = [
      !cardName.length,
      !cardDescription.length,
      !cardImage.length,
      !cardRare.length,
      !number1,
      !number2,
      !number3,
      !totalAttr,
    ];

    const filledForm = errorCases.every((error) => error !== true);

    this.setState({ isSaveButtonDisabled: !filledForm });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      },
      this.handleErrors,
    );
  };

  onSaveButtonClick = () => {
    const {
      cardTrunfo,
      cardRare,
      cardImage,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const newCard = {
      cardTrunfo,
      cardRare,
      cardImage,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    };

    if (newCard.cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }

    this.setState(({ savedCards }) => ({
      savedCards: [...savedCards, newCard],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
    }));
  };

  onRemoveButtonClick = (cardName, cardTrunfo) => {
    const { savedCards } = this.state;
    const newArray = savedCards.filter(
      (savedCard) => savedCard.cardName !== cardName,
    );

    if (cardTrunfo) {
      this.setState({ hasTrunfo: false });
    }
    this.setState({ savedCards: newArray });
  };

  render() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardImage,
      cardName,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      savedCards,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>

        <Form
          cardTrunfo={ cardTrunfo }
          cardRare={ cardRare }
          cardImage={ cardImage }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />

        <h1>Pré-Visualização</h1>
        <Card
          cardTrunfo={ cardTrunfo }
          cardRare={ cardRare }
          cardImage={ cardImage }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
        />

        <h1>Todas as Cartas</h1>
        {savedCards.map((savedCard) => (
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
              onRemoveButtonClick={ () => this.onRemoveButtonClick(
                savedCard.cardName,
                savedCard.cardTrunfo,
              ) }
            />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
