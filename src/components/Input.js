import React from 'react';

class Input extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: this.props.value ? this.props.value : ''
    }

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <input
        type='text'
        name={this.props.name ? this.props.name : null}
        className={ this.props.className ? this.props.className : null}
        placeholder={this.props.placeholder ? this.props.placeholder : null}
        value={this.state.value}
        onChange={this.handleChange.bind(null)}
      />
    );
  }
}

module.exports = Input;