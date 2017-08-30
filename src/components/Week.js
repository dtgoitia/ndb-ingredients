import React from 'react';
import Day from './Day';

class Week extends React.Component {
  constructor(props){
    super(props)
    this.state = {}

    this.selectDay = this.selectDay.bind(this);
  }
  selectDay(){
    console.info('this day should expand!');
  }

  render() {
    return (
      <div className='week'>
        <h2>{this.props.weekPlan.name}</h2>
        {this.props.weekPlan.weekPlan.map((dayPlan, i)=>{
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
  }
}

module.exports = Week;