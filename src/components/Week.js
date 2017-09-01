import React from 'react';
import Day from './Day';

class Week extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }

    this.selectDay = this.selectDay.bind(this);
  }
  selectDay(day){
    console.info(day + ' expanded!');
    document.documentElement.style.setProperty('--gridCurrent', 'var(--grid' + day + ')');
  }

  render() {
    const plan = this.props.weekPlan;
    if (
      typeof(plan) === 'object'
      && plan.name
      && plan.weekPlan
      && typeof(plan.name) === 'string'
      && Array.isArray(plan.weekPlan) === true
      && plan.weekPlan.length > 0
    ) {
      return (
        <div className='week'>
          <h2 onClick={()=>{this.selectDay('None')}}>{plan.name}</h2>
          {plan.weekPlan.map((dayPlan, i)=>{
            return (
              <Day
                dayPlan={dayPlan}
                key={i}
                selectDay={this.selectDay}
              />
            )
          })}
        </div>
      );
    } else {
      return (
        <div className='week'>
          {plan.name && typeof(plan.name) === 'string' ? <h2>{plan.name}</h2> : <h2>Unnamed week</h2>}
          There are no days in this week!
        </div>
      )
    }
  }
}

module.exports = Week;