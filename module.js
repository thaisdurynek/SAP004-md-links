const mdLinks = require('./index.js');

mdLinks('./test.md')
.then((result) => {
    console.log(result);
})