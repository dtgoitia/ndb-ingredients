import axios from 'axios';

const getNutritentsByNdbno = (apiKey, ndbno) => {
  // apiKey: API key
  // ndbno:  NDB food number
  // More NDB API info: https://ndb.nal.usda.gov/ndb/doc/apilist/API-FOOD-REPORT.md
  

  const url = 'https://api.nal.usda.gov/ndb/reports/?ndbno='+ndbno+'&type=b&format=json&api_key='+apiKey;
  axios.get(url)
  .then(res => {
    const food = res.data.report.food;
    console.log('food:', food);
    // this.setState({ posts });
  });
}

const getIngredientNdbno = (apiKey, searchKeyWords, callbackFunction) => {
  // apiKey: API key
  // searchKeyWords: terms requested and used in the search
  //   More NDB API info: https://ndb.nal.usda.gov/ndb/doc/apilist/API-SEARCH.md
  // callbackFunction: function to be called when response received

  if (searchKeyWords === '') {
    alert('Write some words for me to search, I can\'t read your mind!')
  } else {
    const url = 'https://api.nal.usda.gov/ndb/search/?format=json&q='+searchKeyWords+'&sort=r&max=25&offset=0&api_key='+apiKey;
    axios.get(url)
    .then(res => {
      const resultList = res.data.list.item;
      callbackFunction(resultList);
    });
  }
}

const ndb = {
  getNutritentsByNdbno,
  getIngredientNdbno
}

module.exports = ndb;