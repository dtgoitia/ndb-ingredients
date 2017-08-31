import React from 'react';
import EditButton from './EditButton';

class DishName extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.name
    }

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({name: event.target.value});
    this.props.updateDishName(event.target.value);
  }

  render() {
    return (
      <input
        type='text'
        name='dishName'
        className='dishName'
        placeholder='E.g.: "Tuna and pasta salad"'
        value={this.state.name}
        onChange={this.handleChange.bind(null)}
      />
    );
  }
}

class DishaddNewIngredientButton extends React.Component {
  render() {
    return (
      <div
        onClick={this.props.addNewIngredient.bind(null,'kaka')}
      >
        +
      </div>
    );
  }
}

class DishIngredient extends React.Component {
  render() {
    return (
      <li className='dishIngredientRow' key={this.props.i}>
        <div className='ingredientName'>{this.props.ingredient.name}</div>
        <div className='ingredientCalories'>{this.props.ingredient.calories}</div>
      </li>
    );
  }
}

class Dish extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      devMode: false,   // --- REMOVE THIS -------------------------------- REMOVE THIS ------
      name: this.props.dish.name,     // string with dish name
      editionModeOn: false,
      recipe: this.props.dish.recipe, // array with ingredients
    }

    this.updateDishName = this.updateDishName.bind(this);
    this.changeEditionMode = this.changeEditionMode.bind(this);
    this.addNewIngredient = this.addNewIngredient.bind(this);
  }

  updateDishName(name){
    this.setState({name: name});
  }
  
  changeEditionMode(event) {
    // Change edition mode state property
    if (this.state.editionModeOn === true) {
      this.setState({editionModeOn: false});
    } else {
      this.setState({editionModeOn: true});
    }
  }

  addNewIngredient(ingredient){
    console.log('adding ingredient ' + ingredient + '!')
  }

  render(){
    // console.log('this.state:', this.state);
    if (this.state.devMode === false) {
      return (
        <div className='schedulesDish'>
          <div className='dishTopMenu'>
            <DishName name={this.props.name} updateDishName={this.updateDishName} />
            <EditButton changeEditionMode={this.changeEditionMode} />
          </div>
          {
            this.state.editionModeOn === true
            ? <DishaddNewIngredientButton addNewIngredient={this.addNewIngredient} />
            : null
          }
          {
            this.state.editionModeOn === true
            ? <div className='scheduleDishIngredientList'>
                <ul>
                  {this.state.recipe.map((ingredient,i)=>{
                    return <DishIngredient ingredient={ingredient} key={i} />
                  })}
                </ul>
              </div>
            : null
          }
          
        </div>
      )
    } else {
      return <div>I am a dish</div>
    }
    
  }
}

module.exports = Dish;