const express = require('express');
const people = require('./people.json');
var routes = require("./routes/routes.js");

const app = express();
const port = process.env.PORT || 7000;
routes(app);

const server = app.listen(port, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
