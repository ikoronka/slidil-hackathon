const express = require('express')
const axios = require('axios');
const app = express();
const port = 3001;
var cors = require('cors');
app.use(cors());
const kdejsme = require("./modules/kdejsme");
const ares = require("./modules/ares");
const firmy = require("./modules/firmy");
const mfcr = require("./modules/mfcr");
const detail = require("./modules/detail")

app.get('/', (req, res) => res.send('Hello World!'));

app.get("/ares/search/:query", (req, res) => {
  ares.searchTerm(req.params.query)
  .then((data) => {
    res.json(data);
  });
});

app.get("/ares/ares/:ico", (req, res) => {
  ares.getDataARES(req.params.ico)
  .then((data) => {
    res.json(data);
  });
});

app.get("/ares/or/:ico", (req, res) => {
  ares.getDataOR(req.params.ico)
  .then((data) => {
    res.json(data);
  });
});

app.get("/ares/rzp/:ico", (req, res) => {
  ares.getDataRZP(req.params.ico)
  .then((data) => {
    res.json(data);
  });
});

app.get("/ares/res/:ico", (req, res) => {
  ares.getDataRES(req.params.ico)
  .then((data) => {
    res.json(data);
  });
});

app.get("/ares/cns/:ico", (req, res) => {
  ares.getDataCNS(req.params.ico)
  .then((data) => {
    res.json(data);
  });
});

app.get("/ares/ceu/:ico", (req, res) => {
  ares.getDataCEU(req.params.ico)
  .then((data) => {
    res.json(data);
  });
});

app.get("/ares/rzz/:ico", (req, res) => {
  ares.getDataRZZ(req.params.ico)
  .then((data) => {
    res.json(data);
  });
});

app.get("/ares/szr/:ico", (req, res) => {
  ares.getDataSZR(req.params.ico)
  .then((data) => {
    res.json(data);
  });
});

app.get("/ares/psh/:ico", (req, res) => {
  ares.getDataPSH(req.params.ico)
  .then((data) => {
    res.json(data);
  });
});

app.get("/ares/school/:ico", (req, res) => {
  ares.getDataSchool(req.params.ico)
  .then((data) => {
    res.json(data);
  });
});

app.get("/detail/:name", (req, res) => {
  detail.jmeno(req.params.name)
  .then((data) => {
    res.send(data + '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script><script>$(".header").hide();$("footer").hide();</script>');
  })
})

app.get("/firmy/:query", (req, res) => {
  firmy.query(req.params.query)
  .then((data) => {
    res.json(data);
  })
})

app.get("/kdejsme/:surname/:name", (req, res) => {
  kdejsme.query(req.params.name, req.params.surname)
  .then((data) => {
    res.send(data);
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
