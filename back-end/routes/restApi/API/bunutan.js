(function() {
  'use strict';

  var express = require('express'),
  router      = express.Router(),
  app         = express(),

  getBunutan  = require('../clientApImplementation/bunutanNames/getIndex.js'),
  postBunutan = require('../clientApImplementation/bunutanNames/postIndex.js');

  app.route( '/bunutanNames' )
    .get( getBunutan.getBunutanNames )
    .post( postBunutan.postBunutanNames );

  module.exports = app;
})();
