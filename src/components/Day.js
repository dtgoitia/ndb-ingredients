import React from 'react';
import Meal from './Meal';

class Day extends React.Component {
  render() {
    return (
      <div className={this.props.dayPlanning.day}>
        <h3>{this.props.dayPlanning.day}</h3>
        <Meal meal={this.props.dayPlanning.meals[0]} name='Meal 1' />
        <Meal meal={this.props.dayPlanning.meals[1]} name='Meal 2' />
      </div>
    );
  }
}

module.exports = Day;