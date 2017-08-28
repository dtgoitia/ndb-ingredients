// NDB API function library
import ndb from './ndb';

// Electron file handling functions library
import efh from './electronFileHandling';

// Wrap all the utility functions in a single object
const utils = {
  getNutritentsByNdbno: ndb.getNutritentsByNdbno,
  getIngredientNdbno: ndb.getIngredientNdbno,
  createFile: efh.createFile,
  readFile: efh.readFile,
  writeFile: efh.writeFile,
  openFile: efh.openFile,
  closeFile: efh.closeFile
}

module.exports = utils;