const xml2js = require('xml2js');
const axios = require('axios');

let parser = new xml2js.Parser();

function searchTerm(query) {
  return new Promise((resolve, reject) => {
    axios.get('https://wwwinfo.mfcr.cz/cgi-bin/ares/ares_es.cgi?obch_jm=' + query)
    .then((rawData) => {
      parser.parseString(rawData.data, function (err, data) {
        resolve(data["are:Ares_odpovedi"]["are:Odpoved"][0]);
      });
    });
  });
}

function getDataARES(ico) {
  return new Promise((resolve, reject) => {
    axios.get('https://wwwinfo.mfcr.cz/cgi-bin/ares/darv_std.cgi?ico=' + ico)
    .then((rawData) => {
      parser.parseString(rawData.data, function (err, data) {
        resolve(data["are:Ares_odpovedi"]["are:Odpoved"][0]);
      });
    });
  });
}

function getDataOR(ico) {
  return new Promise((resolve, reject) => {
    axios.get('https://wwwinfo.mfcr.cz/cgi-bin/ares/darv_or.cgi?ico=' + ico)
    .then((rawData) => {
      parser.parseString(rawData.data, function (err, data) {
        resolve(data["are:Ares_odpovedi"]["are:Odpoved"][0]);
      });
    });
  });
}

function getDataRZP(ico) {
  return new Promise((resolve, reject) => {
    axios.get('https://wwwinfo.mfcr.cz/cgi-bin/ares/darv_rzp.cgi?ico=' + ico)
    .then((rawData) => {
      parser.parseString(rawData.data, function (err, data) {
        resolve(data["are:Ares_odpovedi"]["are:Odpoved"][0]);
      });
    });
  });
}

function getDataRES(ico) {
  return new Promise((resolve, reject) => {
    axios.get('https://wwwinfo.mfcr.cz/cgi-bin/ares/darv_res.cgi?ico=' + ico)
    .then((rawData) => {
      parser.parseString(rawData.data, function (err, data) {
        resolve(data["are:Ares_odpovedi"]["are:Odpoved"][0]);
      });
    });
  });
}

function getDataCNS(ico) {
  return new Promise((resolve, reject) => {
    axios.get('https://wwwinfo.mfcr.cz/cgi-bin/ares/darv_cns.cgi?ico=' + ico)
    .then((rawData) => {
      parser.parseString(rawData.data, function (err, data) {
        resolve(data["are:Ares_odpovedi"]["are:Odpoved"][0]);
      });
    });
  });
}

function getDataCEU(ico) {
  return new Promise((resolve, reject) => {
    axios.get('https://wwwinfo.mfcr.cz/cgi-bin/ares/darv_ceu.cgi?ico=' + ico)
    .then((rawData) => {
      parser.parseString(rawData.data, function (err, data) {
        resolve(data["are:Ares_odpovedi"]["are:Odpoved"][0]);
      });
    });
  });
}

function getDataRZZ(ico) {
  return new Promise((resolve, reject) => {
    axios.get('https://wwwinfo.mfcr.cz/cgi-bin/ares/darv_rzz.cgi?ico=' + ico)
    .then((rawData) => {
      parser.parseString(rawData.data, function (err, data) {
        resolve(data["are:Ares_odpovedi"]["are:Odpoved"][0]);
      });
    });
  });
}

function getDataSZR(ico) {
  return new Promise((resolve, reject) => {
    axios.get('https://wwwinfo.mfcr.cz/cgi-bin/ares/darv_szr.cgi?ico=' + ico)
    .then((rawData) => {
      parser.parseString(rawData.data, function (err, data) {
        resolve(data["are:Ares_odpovedi"]["are:Odpoved"][0]);
      });
    });
  });
}

function getDataPSH(ico) {
  return new Promise((resolve, reject) => {
    axios.get('https://wwwinfo.mfcr.cz/cgi-bin/ares/darv_psh.cgi?ico=' + ico)
    .then((rawData) => {
      parser.parseString(rawData.data, function (err, data) {
        resolve(data["are:Ares_odpovedi"]["are:Odpoved"][0]);
      });
    });
  });
}

function getDataSchool(ico) {
  return new Promise((resolve, reject) => {
    axios.get('https://wwwinfo.mfcr.cz/cgi-bin/ares/darv_sko.cgi?ico=' + ico)
    .then((rawData) => {
      parser.parseString(rawData.data, function (err, data) {
        resolve(data["are:Ares_odpovedi"]["are:Odpoved"][0]);
      });
    });
  });
}

module.exports = {
  searchTerm: searchTerm,
  getDataARES: getDataARES,
  getDataOR: getDataOR,
  getDataRZP: getDataRZP,
  getDataRES: getDataRES,
  getDataCNS: getDataCNS,
  getDataCEU: getDataCEU,
  getDataRZZ: getDataRZZ,
  getDataSZR: getDataSZR,
  getDataPSH: getDataPSH,
  getDataSchool: getDataSchool
};
