const fs = require('fs');

function mdLinks(path) {
  let regEx = /\[(\S.*)\]\((https*.*)\)/g;
  //return new Promise((resolve,reject) => {
  fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      const dataArray = data.match(regEx);
      dataArray.map((link) => {
        const result = {
          href: link.match(/\((http.*)\)/)[1],
          text: link.match(/\[(.*)\]/)[1],
          file: path
        }
        return console.log(result);
      });
      //Promise.all(result).then(() => console.log(resolve(result)));
    }
  })
  //})    
}

mdLinks('./test.md');

// module.exports = mdLinks;
