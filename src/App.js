import React from 'react';
import utils from './utils/utils';
import privateData from './../privateData';
import IngredientsSearch from './components/IngredientsSearch';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {}

    this.addIngredientsToMyCollection = this.addIngredientsToMyCollection.bind(this);
    this.changeActiveTab = this.changeActiveTab.bind(this);
  }
  
  // Change the active tab shown on screen
  changeActiveTab(navigationBarItem){
    this.setState({activeTab: navigationBarItem})
  }

  // Add ingredients to my collection
  addIngredientsToMyCollection(ingredientList){
    
    // Get existing ingredient list
    let oldIngredientList = this.state.ingredientList;
    let newIngredientList = oldIngredientList;

    // Run through all the ingredients passed
    ingredientList.forEach((ingredient)=>{
      // If the ingredient is not in the list, add it
      if (oldIngredientList.indexOf(ingredient) === -1) {
        newIngredientList.push(ingredient);
      }
    });

    // Update state
    this.setState({ingredientList: newIngredientList});
  }

  render() {
    // console.log('App > this.state:', this.state);
    // console.log('App > this.state.plans[0].weekPlan[0].meals:', this.state.plans[0].weekPlan[0].meals);
    return (
      <div className="App">
        <IngredientsSearch
          getIngredientNdbno={utils.getIngredientNdbno}
          privateData={privateData}
          addIngredientsToMyCollection={this.addIngredientsToMyCollection}
        />
      </div>
    );
  }
}

module.exports = App;
