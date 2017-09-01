import React from 'react';
import Dish from './Dish';

class Meal extends React.Component {
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
        </div>
      );
    }
  }
}

module.exports = Meal;