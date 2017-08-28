import React from 'react';

class IngredientList extends React.Component {
  render(){
    return (
      <div className='schedulesIngredientList'>
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

module.exports = IngredientList;