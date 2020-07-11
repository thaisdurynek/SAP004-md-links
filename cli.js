#!/usr/bin/env node

const mdLinks = require('./index.js');
const path = process.argv[2];
const [, , , ...options] = process.argv;
const axios = require('axios');

mdLinks(path, options)
  .then((result) => {
    if (options.includes('--validate') && options.includes('--stats')) {
      console.log('aeee');
    } else if (options.includes('--validate')) {
      result.forEach((item) => {
        axios.get(item.href)
          .then((response) => {
            console.log({
              href: item.href,
              text: item.text,
              file: item.file,
              statusText: response.statusText,
              status: response.status
            })
          })
          .catch((error) => {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log({
                href: item.href,
                text: item.text,
                file: item.file,
                statusText: error.response.statusText,
                status: error.response.status
              })
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log('Error request', error.message);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
          })
      })
    } else if (options.includes('--stats')){
        console.log('stats')
    } else {
      console.log(result);
    }

  })
  .catch((error) => {
    console.log(error)
  })


//md-links <path-to-file> [options]
