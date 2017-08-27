import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // value: ''
      value: 'Kerrygold pure irish butter'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log('value:', event.target.value);
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    
    this.props.getIngredientNdbno(this.props.privateData.apiKey, this.state.value);
    event.preventDefault(); // to avoid the app restarting...
  }

  render() {
    return (
      <div className='searchBar'>
        <form onSubmit={this.handleSubmit}>
          <label>SearchBar</label>
          <input type="text" name="searchBar" value={this.state.value}
            onChange={this.handleChange.bind(null)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  };
}

class IngredientsSearch extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <p>Hi!</p>
        <SearchBar
          getIngredientNdbno={this.props.getIngredientNdbno}
          privateData={this.props.privateData}
        />
      </div>
    )
  };
}

module.exports = IngredientsSearch;