var express = require('express');
var status = require('http-status');

module.exports = function (wagner) {
  var api = express.Router();

  api.get('/category/id/:id', wagner.invoke(function (Category) {

  }))
};
