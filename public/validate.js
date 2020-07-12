const axios = require('axios');

function validate(item) {
  axios.get(item.href)
    .then((response) => {
      console.log({
        href: item.href,
        text: item.text,
        file: item.file,
        statusText: response.statusText,
        status: response.status,
      });
    })
    .catch((error) => {
      if (error.response) {
        console.log({
          href: item.href,
          text: item.text,
          file: item.file,
          statusText: error.response.statusText,
          status: error.response.status,
        });
      } else if (error.request) {
        console.log('Error request', error.message);
      } else {
        console.log('Error', error.message);
      }
    });
}

module.exports = validate;
