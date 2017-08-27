import axios from 'axios';

const getNutritentsByNdbno = (apiKey,ndbno) => {
  // apiKey: API key
  // ndbno:  NDB food number
  // More NDB API info: https://ndb.nal.usda.gov/ndb/doc/apilist/API-FOOD-REPORT.md

  const url = 'https://api.nal.usda.gov/ndb/reports/?ndbno='+ndbno+'&type=b&format=json&api_key='+apiKey;
  axios.get(url)
  .then(res => {
    console.log('res:', res);
    const food = res.data.report.food;
    console.log('food:', food);
    // this.setState({ posts });
  });
}

const utils = {
  getNutritentsByNdbno: getNutritentsByNdbno
}

module.exports = utils;