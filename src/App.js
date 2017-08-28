import React from 'react';
import utils from './utils';
import privateData from './../privateData';
import IngredientsSearch from './components/IngredientsSearch';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hi!</h1>
        <p>I am an Electron app built in React!</p>
        <IngredientsSearch
          getIngredientNdbno={utils.getIngredientNdbno}
          privateData={privateData}
        />
      </div>
    );
  }
}

module.exports = App;
