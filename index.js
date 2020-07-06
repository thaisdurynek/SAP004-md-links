const fs = require('fs');

function mdLinks(path) {
  let regEx = /\[(\S.*)\]\((https*.*)\)/g;
  return new Promise((resolve,reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(err.message);
      }
      else if (data) {
        let arr = [];
        const dataArray = data.match(regEx);
        dataArray.map((link) => {
          const href = link.match(/\((https*.*)\)/)[1];
          const text = link.match(/\[(\S.*)\]/)[1];
          arr.push({
            href: href,
            text: text,
            file: path
          })
        });
        resolve(arr);
      }
    })
  })
  // promise.then((result) => {
  //   console.log(result);
  // })   
}

//mdLinks('./test.md');

module.exports = mdLinks;
