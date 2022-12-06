import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      hasTrunfo: false,
      isSaveButtonDisabled: false,
      cardTrunfo: false,
      cardRare: 'normal',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardDescription: '',
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  onSaveButtonClick = () => {
    console.log('Clique');
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
      </div>
    );
  }
}

export default App;
