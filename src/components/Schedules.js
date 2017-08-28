import React from 'react';
import IngredientList from './IngredientList';
import Dish from './Dish';
import Week from './Week';

class Schedules extends React.Component {
  render(){
    return (
      <div className='schedules'>
        <IngredientList
          ingredientList={this.props.ingredientList}
        />
        <Week
          weekPlanning={this.props.state.weekPlanning}
        />
        <Dish
          name='super dish'
          state={this.props.state}
          recipe={[
            {name: "ingredient 1", calories: "loads"},
            {name: "ingredient 2", calories: "less"},
          ]}
        />
      </div>
    )
  }
}

module.exports = Schedules;