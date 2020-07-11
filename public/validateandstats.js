const axios = require('axios');
const stats = require('./stats.js');

function validateAndStats(arr) {
  const unique = stats(arr).unique;
  const total = stats(arr).total;
  let broken = 0;
  let array = [];
  arr.forEach(element => {
    // let promise = new Promise((resolve, reject) => {
    //   axios.get(element.href)
    // }
    const currentLink = axios.get(element.href)
    .then(() => {})
    .catch(() => {broken++})
    array.push(currentLink);
  });
  Promise.all(array).then(() => {})
  .finally(() => {
    console.log({
      total: total,
      unique: unique,
      broken: broken
    });
  })
};

module.exports = validateAndStats;
