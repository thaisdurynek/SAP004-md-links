#!/usr/bin/env node

const readLinks = require('./index.js');

const path = process.argv[2];
const [, , , ...options] = process.argv;
const validate = require('./public/validate.js');
const stats = require('./public/stats.js');
const statsAndValidate = require('./public/validateandstats.js');

function mdLinks(file, option) {
  readLinks(file)
    .then((result) => {
      if (option.includes('--validate') && option.includes('--stats')) {
        return statsAndValidate(result);
      } else if (option.includes('--validate')) {
        return Promise.all(validate(result))
          .then((res) => (console.log(res)));
      } else if (option.includes('--stats')) {
        console.log(stats(result));
        return stats(result);
      } else {
        console.log(result);
        return result;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

mdLinks(path, options);

module.exports = mdLinks;
