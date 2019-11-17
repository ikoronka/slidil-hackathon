const axios = require('axios');
const jsdom = require('jsdom');
const querystring = require('querystring');

function query(jmeno, prijmeni) {
  return new Promise ((resolve, reject) => {
    // rykvest numero ajns
    axios.get('http://www.kdejsme.cz/jmeno/' + querystring.escape(jmeno) + '/hustota').then((data) => {
      let cetnost = [];
      let dom = new jsdom.JSDOM(data.data);
      let text = dom.window.document.querySelector('#mapTitle').querySelector('h2').textContent;
      cetnost.push(text.substring(text.indexOf('na ')+3, text.indexOf(' ', text.indexOf('na ')+3)));
      // rykvest numero cvaj
      axios.get('http://www.kdejsme.cz/prijmeni/' + querystring.escape(prijmeni) + '/hustota').then((data) => {
        let dom = new jsdom.JSDOM(data.data);
        let text = dom.window.document.querySelector('#mapTitle').querySelector('h2').textContent;
        cetnost.push(text.substring(text.indexOf('na ')+3, text.indexOf(' ', text.indexOf('na ')+3)));
        resolve((10649800 / (parseInt(cetnost[0]) * parseInt(cetnost[1]))).toString());
      });
    });
  });
}

module.exports = {
  query: query
}
