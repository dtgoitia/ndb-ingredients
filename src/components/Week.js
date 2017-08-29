import React from 'react';
import Day from './Day';

class Week extends React.Component {
  render() {
    return (
      <div>
        <Day dayPlanning={this.props.weekPlanning[0]} />
        <Day dayPlanning={this.props.weekPlanning[1]} />
      </div>
    );
  }
}

module.exports = Week;