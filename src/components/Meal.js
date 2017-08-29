import React from 'react';
import Dish from './Dish';

class Meal extends React.Component {
  render() {
    return (
      <div>
        <h4>Meal: {this.props.meal.name}</h4>
        <Dish dish={this.props.meal.dishes[0]} />
        <Dish dish={this.props.meal.dishes[1]} />
      </div>
    );
  }
}

module.exports = Meal;