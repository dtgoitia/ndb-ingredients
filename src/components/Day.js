import React from 'react';
import Meal from './Meal';
import Input from './Input';

class AddMeal extends React.Component {
  render() {
    return (
      <div className='addMeal'>
        <form 
          id={'AddMealInput'}
          onSubmit={this.props.handleAddMealSubmit}
        >
          <Input
            placeholder='Add meal name!'
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

  handleAddMealSubmit(event){

    // Get input value (new meal name)
    const newMealName = event.target.value;
    // Pass new meal info to <App /> to be added to its state
    this.props.addMeal(this.props.weekName, this.props.dayPlan.day, {
      name: newMealName,
      dishes: []
    });
    // Clean input
    event.preventDefault(); // Prevent page reloading on form submit
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