import React from 'react';
import Meal from './Meal';

class Day extends React.Component {
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
        </div>
      );
    } else {
      return (
        <div>
          There is no info in this day!
        </div>
      )
    }
  }
}

module.exports = Day;