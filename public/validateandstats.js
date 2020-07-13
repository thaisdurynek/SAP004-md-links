const axios = require('axios');
const stats = require('./stats.js');

function validateAndStats(arr) {
  const { unique } = stats(arr);
  const { total } = stats(arr);
  let broken = 0;
  const array = [];
  arr.forEach((element) => {
    const currentLink = axios.get(element.href)
      .then(() => {})
      .catch(() => {
        broken += 1;
      });
    array.push(currentLink);
  });
  Promise.all(array).then(() => {})
    .finally(() => {
      console.log({
        total,
        unique,
        broken,
      });
    });
}

module.exports = validateAndStats;
