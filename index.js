const fs = require('fs');

function mdLinks(path) {
  let regEx = /\[(\S.*)\]\((https*.*)\)/g;
  return new Promise((resolve,reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(err.message);
      }
      else if (data) {
        const dataArray = data.match(regEx);
        const bla = dataArray.map((link) => {
          const href = link.match(/\((https*.*)\)/)[1];
          const text = link.match(/\[(\S.*)\]/)[1];
           return {
            href: href,
            text: text,
            file: path
          }
        });
        resolve(bla);
      }
    })
  })  
}

module.exports = mdLinks;
