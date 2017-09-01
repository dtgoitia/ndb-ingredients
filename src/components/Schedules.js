import React from 'react';
import Week from './Week';
import Input from './Input';

class AddWeek extends React.Component {
  render() {
    return (
      <div className='addWeek'>
        <form onSubmit={this.props.handleAddWeekSubmit}>
          <Input
            id='addWeekInput'
            placeholder='Write week name!'
          />
        </form>
      </div>
    );
  }
}

class Schedules extends React.Component {
  constructor(props){
    super(props)
    this.state = {}

    this.handleAddWeekSubmit = this.handleAddWeekSubmit.bind(this);
  }

  handleAddWeekSubmit(event){
    // Get input value (new week name)
    const newWeekName = document.getElementById('addWeekInput').value;
    // Pass new week name to App component to be added to the state
    this.props.addWeek(newWeekName);
    event.preventDefault(); // Prevent page reloading on form submit
  }

  render(){
    const plans = this.props.plans;
    if(
      Array.isArray(plans) === true
      && plans.length > 0
    ){
      return (
        <div className='schedules'>
          {plans.map((weekPlan, i)=>{
            return(
              <Week
                weekPlan={weekPlan}
                key={i}
                addMeal={this.props.addMeal}
              />
            )
          })}
        </div>
      )
    } else {
      return (
        <div className='schedules'>
          <AddWeek handleAddWeekSubmit={this.handleAddWeekSubmit} />
        </div>
      )
    }
  }
}

module.exports = Schedules;