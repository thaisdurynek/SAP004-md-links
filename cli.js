#!/usr/bin/env node

const mdLinks = require('./index.js');
const path = process.argv[2];
const [, , , ...options] = process.argv;
const validate = require('./public/validate.js');
const stats = require('./public/stats.js');
const statsAndValidate = require('./public/validateandstats.js');

mdLinks(path, options)
  .then((result) => {
    if (options.includes('--validate') && options.includes('--stats')) {
      statsAndValidate(result);
    } else if (options.includes('--validate')) {
      result.forEach((linkArrayItem) => {
        validate(linkArrayItem);
      })
    } else if (options.includes('--stats')){
        console.log(stats(result));
    } else {
      console.log(result);
    }

  })
  .catch((error) => {
    console.log(error)
  })

