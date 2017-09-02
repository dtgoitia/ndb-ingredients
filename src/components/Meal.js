import React from 'react';
import Dish from './Dish';

class AddDish extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: this.props.value ? this.props.value : ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // Pass the name of the dish (this.state.value) to <Meal />
    // to be added as a new dish
    this.props.handleAddDishSubmit(this.state.value)

    // Reset input value
    this.setState({value: ''})

    // Prevent page from reloading
    event.preventDefault();
  }

  render() {
    return (
      <div className='addDish'>
        <form 
          onSubmit={this.handleSubmit}
        >
          <input
            type='text'
            name='AddDishInput'
            placeholder='Add a dish!'
            value={this.state.value}
            onChange={this.handleChange.bind(null)}
          />
        </form>
      </div>
    );
  }
}

class Meal extends React.Component {
  constructor(props){
    super(props)
    this.state = {}

    this.handleAddDishSubmit = this.handleAddDishSubmit.bind(this);
  }
  
  // Recieve new dish name from child <AddDish /> and pass all the necessary
  // information to <App /> to update <App /> state to add the new dish
  handleAddDishSubmit(newDishName){
    this.props.addDish(
      this.props.week,      // week name
      this.props.day,       // day name
      this.props.meal.name, // meal name
      {                     // new dish object:
        name: newDishName,  //  - dish name
        recipe: []          //  - no ingredients (empty dish)
      }
    );
    // Do not use here event.preventDefault() !!
  }

  render() {
    const meal = this.props.meal;
    if (
      typeof(meal) === 'object'
      && meal.name
      && meal.dishes
      && typeof(meal.name) === 'string'
      && Array.isArray(meal.dishes) === true
      && meal.dishes.length > 0
    ) {
      return (
        <div className='meal'>
          <div className='mealBar'></div>
          <h4>{meal.name}</h4>
          {meal.dishes.map((dish,i)=>{
            return <Dish dish={dish} key={i} />
          })}
        </div>
      );
    } else {
      return(
        <div className='meal'>
          <div className='mealBar'></div>
          <h4>{meal.name}</h4>
          <div>There are no dishes is this meal!</div>
          <AddDish handleAddDishSubmit={this.handleAddDishSubmit}/>
        </div>
      );
    }
  }
}

module.exports = Meal;