'use strict';

var express = require('express');
var useragent = require('express-useragent');
var port = process.env.PORT || 8080;
var app = express();


app.use(useragent.express());

app.get('/', function(req, res) {
    var header = req.headers;
    var language = header['accept-language'].split(',');

    res.json({  ipaddress: header.host,
                language: language[0],
                software: req.useragent.platform + ', ' + req.useragent.os
             });
});


app.listen(port, function() {
  console.log("Server up listening to: " + port);
});