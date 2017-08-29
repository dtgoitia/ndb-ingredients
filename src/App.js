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
      load: true,
      activeTab: 'Ingredient Search',
      // activeTab: 'Schedules',
      ingredientList: [],
      weekPlanning: [
        {
          day: 'Monday',
          meals: [
            {
              name: 'Meal 1',
              dishes: [
                {
                  name: 'Basic salad',
                  recipe: [
                    {name: "ingredient 1", calories: "loads"},
                    {name: "ingredient 2", calories: "less"},
                  ]
                },
                {
                  name: 'Basic salad feta',
                  recipe: [
                    {name: "ingredient 1", calories: "loads"},
                    {name: "ingredient 2", calories: "less"},
                    {name: "feta cheese", calories: "a bit"},
                  ]
                }
              ]
            },
            {
              name: 'Meal 2',
              dishes: [
                {
                  name: 'Basic salad 2',
                  recipe: [
                    {name: "ingredient 1", calories: "loads"},
                    {name: "ingredient 2", calories: "less"},
                  ]
                },
                {
                  name: 'Basic salad feta 2',
                  recipe: [
                    {name: "ingredient 1", calories: "loads"},
                    {name: "ingredient 2", calories: "less"},
                    {name: "feta cheese", calories: "a bit"},
                  ]
                }
              ]
            }
          ]
        },
        {
          day: 'Tuesday',
          meals: [
            {
              name: 'Meal 1',
              dishes: [
                {
                  name: 'Basic salad',
                  recipe: [
                    {name: "ingredient 1", calories: "loads"},
                    {name: "ingredient 2", calories: "less"},
                  ]
                },
                {
                  name: 'Basic salad feta',
                  recipe: [
                    {name: "ingredient 1", calories: "loads"},
                    {name: "ingredient 2", calories: "less"},
                    {name: "feta cheese", calories: "a bit"},
                  ]
                }
              ]
            },
            {
              name: 'Meal 2',
              dishes: [
                {
                  name: 'Basic salad 2',
                  recipe: [
                    {name: "ingredient 1", calories: "loads"},
                    {name: "ingredient 2", calories: "less"},
                  ]
                },
                {
                  name: 'Basic salad feta 2',
                  recipe: [
                    {name: "ingredient 1", calories: "loads"},
                    {name: "ingredient 2", calories: "less"},
                    {name: "feta cheese", calories: "a bit"},
                  ]
                }
              ]
            }
          ]
        }
      ]
    }

    this.addIngredientsToMyCollection = this.addIngredientsToMyCollection.bind(this);
    this.changeActiveTab = this.changeActiveTab.bind(this);
    this.save = this.save.bind(this);

    this.loadConfig();
    
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

  // Load config settings
  loadConfig(){
    // Look for settings file
    utils.readFile('./nutrition-config.json', (configData)=>{
      const config = JSON.parse(configData);
      this.setState({ config: config });
    });
  }

  // Save
  save(filePath){
    let content = {
      state: this.state
    };  
    utils.writeFile(filePath,JSON.stringify(content));
  }

  // Load
  load(filePath){
    let readData;
    const handleReadData = (data) => {
      readData = JSON.parse(data);
    
      this.setState(readData.state);
      this.setState({load: false});
    }
    utils.readFile(filePath,handleReadData);
  }

  render() {
    // If config loaded and autosave=true, set autosave
    if (this.state.config && this.state.config.autosave === true) {
      setInterval(()=>{this.save('./autosave.json')}, 1*1000);
    }

    // If config loaded and loadAutoSaveOnStart=true, load state
    if (this.state.config && this.state.config.loadAutoSaveOnStart === true && this.state.load === true) {
      this.load('autosave.json');
    }

    // console.log('App > this.state:', this.state);
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
            weekPlanning={this.state.weekPlanning}
          /> : null
        }
      </div>
    );
  }
}

module.exports = App;
