import React from 'react';
import utils from './utils/utils';
import privateData from './../privateData';
import NavigationBar from './components/NavigationBar';
import Schedules from './components/Schedules';
import IngredientsSearch from './components/IngredientsSearch';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeTab: 'Ingredient Search',
      // activeTab: 'Schedules',
      ingredientList: []
    }

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
    console.log('this.state.ingredientList:', this.state.ingredientList);
    return (
      <div className="App">
        <NavigationBar activeTab={this.state.activeTab} changeActiveTab={this.changeActiveTab} />
        {
          this.state.activeTab === 'Ingredient Search' ?
          <IngredientsSearch
            getIngredientNdbno={utils.getIngredientNdbno}
            privateData={privateData}
            addIngredientsToMyCollection={this.addIngredientsToMyCollection}
          /> : null
        }
        {
          this.state.activeTab === 'Schedules' ?
          <Schedules
            ingredientList={this.state.ingredientList}
          /> : null
        }
      </div>
    );
  }
}

module.exports = App;
