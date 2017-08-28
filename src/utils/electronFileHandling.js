const fs = window.require("electron").remote.require('fs');



// --- READ FILE -------------------------------
const readFile = (path, foo) => {
  // Read file under "filePath" and if successful run callback
  //  path: relative/absolute path of the file to read
  //  foo: callback to be runned if file successfully read. Use this callback
  //    function to store the value of read data
  fs.readFile(path, (err, data) => {
    if (err) {
      // handle error
      console.error('ERROR in electronFileHandling.readFile:', err);
    } else {
      // callback function to store data
      foo(data);
    }
  })
};

// // --- READ FILE EXAMPLE -----------------------------------------------------------
// function testReadFile() {
//   let readData;                               // declare variable to receive and store read data
//   const handleReadData = (data) => {          // declare callback function to store read data
//     readData = JSON.parse(data);              //    parse raw data to JSON and store it
//     console.log('Read data:', readData);      //    log read and parsed data
//   }
//   readFile('./output.json', handleReadData);  // read "./output.json" and if successfull pass read data to "handleReadData()"
// }
// testReadFile();                               // Execute test read function
// // ---------------------------------------------------------------------------------



// --- WRITE FILE ------------------------------
const writeFile = (path, content, foo) => {
  // Write "content" to file under "path" and if successful run callback if any
  //   path: relative/absolute path of the file to write
  //   content: content to write to the file
  //   foo: optional callback function to run if successfull

  fs.writeFile(path, content, (err, data) => {
    if (err) {
      console.error('ERROR in electronFileHandling.writeFile:', err); // handle error
    } else {                                                          // if sucessfull
      if (foo) { foo(data) }                                          // if callback available, run it
    }
  })
};

// // --- WRITE FILE EXAMPLE ----------------------------------------------------------
// function testWriteFile() {
//   const contentWritten = () => {                                        // declare callback function to be executed if file succesfully written
//     console.log('Everything OK!');                                      //    log success message
//   }
//   let content = {name: 'John',surname: 'Doe'};
//   writeFile('./output.json', JSON.stringify(content), contentWritten);  // write stringified json to "./output.json" and if successfull run "contentWritten()"
// }
// testWriteFile();                                                        // Execute test write function
// // ---------------------------------------------------------------------------------


// TODO:
const createFile = 'createFile';
const openFile = 'openFile';
const closeFile = 'closeFile';

const efh = {
  createFile: createFile,
  readFile: readFile,
  writeFile: writeFile,
  openFile: openFile,
  closeFile: closeFile
}

module.exports = efh;