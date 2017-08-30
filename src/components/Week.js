import React from 'react';
import Day from './Day';

class Week extends React.Component {
  constructor(props){
    super(props)
    this.state = {}

    this.selectDay = this.selectDay.bind(this);
  }
  selectDay(day){
    console.info(day + ' should expand!');
    let htmlStyles = window.getComputedStyle(document.querySelector('html'));
    let gridCurrent = parseInt(htmlStyles.getPropertyValue('--gridCurrent'));
    document.documentElement.style.setProperty('--gridCurrent', 'var(--grid' + day + ')');
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