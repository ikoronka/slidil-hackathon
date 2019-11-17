const axios = require('axios');

function query(nazev) {
  const data = {
    'entityType': 'result',
    'query': nazev,
    'service': 'FIRMY',
    'params': {}
  };
  return new Promise((resolve, reject) => {
    axios.post('https://hackaton-vyhledavani.sbeta.cz/v3/serviceSearch', data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic aGFja2F0b246dnlobGVkYXZhbmkyMDE5'
      }
    }).then((data) => {
      resolve(data.data);
    });
  });
}

module.exports = {
  query: query
}

/*
'' -H 'Content-Type: application/json' --data '{"entityType":"result","query":"seznam brno","service":"FIRMY","params":{}}' -H'Authorization: '
*/
