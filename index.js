const fs = require('fs');

function readLinks(path) {
  const regEx = /\[(\S.*)\]\((https*.*)\)/g;
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(err.message);
      } else if (data) {
        const dataArray = data.match(regEx);
        const linksObject = dataArray.map((link) => {
          const href = link.match(/\((https*.*)\)/)[1];
          const text = link.match(/\[(\S.*)\]/)[1];
          return {
            href,
            text,
            file: path,
          };
        });
        resolve(linksObject);
      }
    });
  });
}

module.exports = readLinks;
