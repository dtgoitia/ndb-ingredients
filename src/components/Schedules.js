import React from 'react';
import Week from './Week';

class Schedules extends React.Component {
  render(){
    return (
      <div className='schedules'>
        {this.props.plans.map((weekPlan, i)=>{
          return <Week weekPlan={weekPlan} key={i} />
        })}
      </div>
    )
  }
}

module.exports = Schedules;