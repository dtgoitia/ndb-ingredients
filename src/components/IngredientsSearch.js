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
    this.props.getIngredientNdbno(this.props.privateData.apiKey, this.state.value, this.props.handleResults);
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
    this.state = {}

    this.handleResults = this.handleResults.bind(this);
  }

  handleResults(results){
    console.log('handleResults() executed!');
    console.log('results:', results);
  }

  render() {
    return (
      <div>
        <p>Hi!</p>
        <SearchBar
          getIngredientNdbno={this.props.getIngredientNdbno}
          handleResults={this.handleResults}
          privateData={this.props.privateData}
        />
      </div>
    )
  };
}

module.exports = IngredientsSearch;