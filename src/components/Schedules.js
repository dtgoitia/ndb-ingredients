import React from 'react';

class Schedules extends React.Component {
  render(){
    return (
      <div>
        <p>My collection of ingredients</p>
        <ul>
          {this.props.ingredientList.map((ingredient, i)=>{
            return(
              <li key={i}>
                {ingredient.name}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

module.exports = Schedules;