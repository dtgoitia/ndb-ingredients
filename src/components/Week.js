import React from 'react';
import Day from './Day';

class Week extends React.Component {
  render() {
    return (
      <div className='week'>
        <p>{this.props.weekPlan.name}</p>
        {this.props.weekPlan.weekPlan.map((dayPlan, i)=>{
          return <Day dayPlan={dayPlan} key={i} />
        })}
      </div>
    );
  }
}

module.exports = Week;