import React from 'react';
import Week from './Week';

class Schedules extends React.Component {
  render(){
    const plans = this.props.plans;
    if(
      Array.isArray(plans) === true
      && plans.length > 0
    ){
      return (
        <div className='schedules'>
          {plans.map((weekPlan, i)=>{
            return <Week weekPlan={weekPlan} key={i} />
          })}
        </div>
      )
    } else {
      return (
        <div className='schedules'>
          There is not planning!
        </div>
      )
    }
  }
}

module.exports = Schedules;