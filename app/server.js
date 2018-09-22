const express = require('express');
const bodyParser = require('body-parser');


// SERVER
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.text());
//app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


var date = new Date();

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log(date.toUTCString());
  });