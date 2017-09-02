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
    // console.info(day + ' expanded!');
    document.documentElement.style.setProperty('--gridCurrent', 'var(--grid' + day + ')');
  }

  render() {
    const plan = this.props.weekPlan;
    if (
      typeof(plan) === 'object'
      && (plan.name || plan.name === '')
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
                weekName={plan.name}
                dayPlan={dayPlan}
                key={i}
                selectDay={this.selectDay}
                addMeal={this.props.addMeal}
                addDish={this.props.addDish}
              />
            )
          })}
        </div>
      );
    } else {
      console.error('Properties passed to Week component (this.props):', this.props);
      return (
        <div className='week'>
          <h1>Something went wrong...</h1>
          <p>check log for more detail ;)</p>
        </div>
      )
    }
  }
}

module.exports = Week;