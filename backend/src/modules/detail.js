const axios = require('axios');
const cheerio = require('cheerio');

function jmeno(celeJmeno) {
  return new Promise((resolve, reject) => {
    axios.get('https://www.detail.cz/search/' + celeJmeno, {
      headers: {
        'Authorization': 'Token a0KEJCjFI9UuxxhQagZxrfbqsy8wAss5'
      }
    }).then((data) => {
      resolve(data.data);
    });
  });
}

module.exports = {
  jmeno: jmeno
}
