import React from 'react';
import Meal from './Meal';

class AddMeal extends React.Component {
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
    // Pass the name of the meal (this.state.value) to <Day />
    // to be added as a new meal
    this.props.handleAddMealSubmit(this.state.value)

    // Reset input value
    this.setState({value: ''})

    // Prevent page from reloading
    event.preventDefault();
  }
  
  render() {
    return (
      <div className='addMeal'>
        <form 
          onSubmit={this.handleSubmit}
        >
          <input
            type='text'
            name='AddMealInput'
            placeholder='Add meal name!'
            value={this.state.value}
            onChange={this.handleChange.bind(null)}
          />
        </form>
      </div>
    );
  }
}

class Day extends React.Component {
  constructor(props){
    super(props)
    this.state = {}

    this.handleAddMealSubmit = this.handleAddMealSubmit.bind(this);
  }

  // Recieve new meal name from child <AddMeal /> and pass all the necessary
  // information to <App /> to update <App /> state to add the new meal
  handleAddMealSubmit(newMealName){
    this.props.addMeal(this.props.weekName, this.props.dayPlan.day, {
      name: newMealName,
      dishes: []
    });
    // Do not use here event.preventDefault() !!
  }
  render() {
    const plan = this.props.dayPlan;
    if (
      typeof(plan) === 'object'
      && plan.day
      && plan.meals
      && typeof(plan.day) === 'string'
      && Array.isArray(plan.meals) === true
      && plan.meals.length > 0
    ) {
      return (
        <div
          className={'day ' + plan.day}
          onClick={()=>{this.props.selectDay(plan.day)}}
        >
          <h3>{plan.day}</h3>
          {plan.meals.map((meal,i)=>{
            return <Meal meal={meal} key={i} />
          })}
          <AddMeal handleAddMealSubmit={this.handleAddMealSubmit} day={plan.day} />
        </div>
      );
    } else {
      return (
        <div
          className={'day ' + plan.day}
          onClick={()=>{this.props.selectDay(plan.day)}}
        >
          <h3>{plan.day}</h3>
          <AddMeal handleAddMealSubmit={this.handleAddMealSubmit} day={plan.day} />
        </div>
      )
    }
  }
}

module.exports = Day;