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
  }

  handleSubmit(event) {
    this.props.getIngredientNdbno(this.props.privateData.apiKey, this.state.value, this.props.handleResults);
    event.preventDefault(); // to avoid the app restarting...
  }

  render() {
    return (
      <div className='searchBar'>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='searchBar'
            placeholder='E.g.: "Kerrygold pure irish butter"'
            value={this.state.value}
            onChange={this.handleChange.bind(null)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

class SearchResults extends React.Component {
  render() {
    return (
      <div className='searchResults'>
        <div>I am a list of results!</div>
        <ul className='searchResultsContainer'>
          {this.props.results.map((result, i) => {
            return <SearchResult key={i} result={result} keyValue={i} addRemoveIngredient={this.props.addRemoveIngredient} />
          })}
        </ul>
      </div>
    );
  }
}

class SearchResult extends React.Component {
  render() {
    return (
      <li key={this.props.i}>
        <div className='searchResult'>
          <div className='searchResultName'>{this.props.result.name}</div>
          <div className='searchResultNdbno'>{this.props.result.ndbno}</div>
          <input type='button' value='Add me!' onClick={this.props.addRemoveIngredient.bind(null, this.props.result)} />
        </div>
      </li>
    );
  }
}

class IngredientList extends React.Component {
  render() {
    return (
      <div className='ingredientList'>
        <ul>
          {this.props.ingredientList.map((ingredient, i)=>{
            return <IngredientSelected key={i} keyValue={i} ingredient={ingredient} />
          })}
        </ul>
        <input type='button'
          value='Add to my collection'
          onClick={this.props.addIngredientsToMyCollection.bind(null, this.props.ingredientList)}
        />
      </div>
    );
  }
}

class IngredientSelected extends React.Component {
  render() {
    return (
      <li key={this.props.keyValue}>
        {this.props.ingredient.name}
      </li>
    );
  }
}

class IngredientsSearch extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showResults: false,
      ingredientList: []
    }

    this.handleResults = this.handleResults.bind(this);
    this.addRemoveIngredient = this.addRemoveIngredient.bind(this);
  }

  handleResults(results){
    this.setState(
      {
        results: results,
        showResults: true
      }
    );
  }

  addRemoveIngredient(ingredient){
    
    // Copy existing ingredient list
    let newIngredientList = this.state.ingredientList;
    
    // If ingredient is not in the list, add it
    if (newIngredientList.indexOf(ingredient) === -1) {
      newIngredientList.push(ingredient);
    
      // If ingredient is in the list, remove it
    } else {
      let tempArray = [];
      newIngredientList.forEach((existingIngredient)=>{
        if (existingIngredient !== ingredient) tempArray.push(existingIngredient);
      });
      newIngredientList = tempArray;
    }
    // Update state
    this.setState({ingredientList: newIngredientList});
  }

  render() {
    return (
      <div>
        <SearchBar
          getIngredientNdbno={this.props.getIngredientNdbno}
          handleResults={this.handleResults}
          privateData={this.props.privateData}
        />
        {
          this.state.showResults === true ?
          <SearchResults
            results={this.state.results}
            addRemoveIngredient={this.addRemoveIngredient}
          />
          : null
        }
        {
          this.state.ingredientList.length !== 0 ?
          <IngredientList
            ingredientList={this.state.ingredientList}
            addIngredientsToMyCollection={this.props.addIngredientsToMyCollection}
          />
          : null
        }
      </div>
    );
  }
}

module.exports = IngredientsSearch;