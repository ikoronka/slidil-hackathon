const axios = require("axios");
const soap = require('soap');

function getDataByDIC(dic) {
  return new Promise(function(resolve, reject) {
    axios.post(
        "http://adisrws.mfcr.cz/adistc/axis2/services/rozhraniCRPDPH.rozhraniCRPDPHSOAP",
        `<?xml version="1.0" encoding="UTF-8"?>\n
      <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://adis.mfcr.cz/rozhraniCRPDPH/">\n
        <SOAP-ENV:Body>\n
          <ns1:StatusNespolehlivyPlatceRozsirenyRequest>\n
            <ns1:dic>7652100434</ns1:dic>\n
          </ns1:StatusNespolehlivyPlatceRozsirenyRequest>\n
        </SOAP-ENV:Body>\n
      </SOAP-ENV:Envelope>`,
        {
          headers: {
            Host: "restninja.io",
            "User-Agent":
              "Mozilla/5.0 (X11; Linux x86_64; rv:70.0) Gecko/20100101 Firefox/70.0",
            Accept: "*/*",
            "Accept-Language": "en-US,en;q=0.5",
            "Accept-Encoding": "gzip, deflate, br",
            request:
              "eyJtZXRob2QiOiJQT1NUIiwidXJpIjoiaHR0cDovL2FkaXNyd3MubWZjci5jei9hZGlzdGMvYXhpczIvc2VydmljZXMvcm96aHJhbmlDUlBEUEgucm96aHJhbmlDUlBEUEhTT0FQIiwiaGVhZGVycyI6e30sImF1dGgiOnsiX3QiOiJOb25lIn19",
            "Content-Length": "353",
            Origin: "https://restninja.io",
            Connection: "keep-alive",
            Referer:
              "https://restninja.io/share/26ebcc26d53631a3aa87cba41db7d4e70f1a7a85/0",
            Cookie:
              "__cfduid=d818b69d37a95cbb7c230b8c2c3e34a581573880838; _ga=GA1.2.569472459.1573880821; _gid=GA1.2.255528749.1573880821; TawkConnectionTime=0; __tawkuuid=e::restninja.io::Tl/RK7FmWwdR4QyRk4UM9Caofw3vR5NLLx7CxKsoDQJ85CCeSE4PrWgoUpcz+Q2n::2; BIGipServerrws3http=3341835274.20480.0000; BIGipServerrws1http=389045258.20480.0000",
          }
        }
      )
      .then(data => {
        resolve(data);
      });
  });
}

module.exports = {
  getDataByDIC: getDataByDIC,
};
