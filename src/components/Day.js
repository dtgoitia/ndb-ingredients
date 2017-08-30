import React from 'react';
import Meal from './Meal';

class Day extends React.Component {
  render() {
    return (
      <div
        className={this.props.dayPlan.day}
        onClick={()=>{this.props.selectDay(this.props.dayPlan.day)}}
      >
        <h3>{this.props.dayPlan.day}</h3>
        {this.props.dayPlan.meals.map((meal,i)=>{
          return <Meal meal={meal} key={i} />
        })}
      </div>
    );
  }
}

module.exports = Day;