import React from 'react';
import utils from './utils';
import privateData from './../privateData';


class App extends React.Component {
  render() {
    utils.getNutritionData(privateData.apiKey);
    return (
      <div className="App">
        <h1>Hi!</h1>
        <p>I am an Electron app built in React!</p>
      </div>
    );
  }
}

module.exports = App;
