// NDB API function library
import ndb from './ndb';

// Wrap all the utility functions in a single object
const utils = {
  getNutritentsByNdbno: ndb.getNutritentsByNdbno,
  getIngredientNdbno: ndb.getIngredientNdbno,
}

module.exports = utils;