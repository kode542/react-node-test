var express = require('express');
var path = require('path');
var logger = require('morgan');
var body = require('body-parser');
var apiRouter = require('./routes/api');
var app = express();



app.use(body.json());
app.use(body.urlencoded({ extended: true }));


app.use('/api', apiRouter);



module.exports = app;
