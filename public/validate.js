const axios = require('axios');

function validate(array) {
  const promises = array.map((item) => axios.get(item.href)
    .then((response) => ({
      href: item.href,
      text: item.text,
      file: item.file,
      statusText: response.statusText,
      status: response.status,
    }))
    .catch((error) => {
      if (error.response) {
        return ({
          href: item.href,
          text: item.text,
          file: item.file,
          statusText: error.response.statusText,
          status: error.response.status,
        });
      } else if (error.request) {
        return ('Error request');
      } else {
        return ('Error');
      }
    }));
  return promises;
}

module.exports = validate;
