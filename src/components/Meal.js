import React from 'react';
import Dish from './Dish';

class Meal extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.meal.name}</h4>
        {this.props.meal.dishes.map((dish,i)=>{
          return <Dish dish={dish} key={i} />
        })}
      </div>
    );
  }
}

module.exports = Meal;