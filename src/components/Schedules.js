import React from 'react';
import Week from './Week';

class Schedules extends React.Component {
  render(){
    return (
      <div className='schedules'>
        <Week weekPlanning={this.props.weekPlanning} />
      </div>
    )
  }
}

module.exports = Schedules;