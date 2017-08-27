import axios from 'axios';

const getNutritionData = (API) => {
  console.log('getNutritionData() executed');
  axios.get(`https://www.reddit.com/r/reactjs.json`)
  .then(res => {
    console.log('res:', res);
    // const posts = res.data.data.children.map(obj => obj.data);
    // this.setState({ posts });
  });    
  return null
}

const utils = {
  getNutritionData: getNutritionData
}

module.exports = utils;