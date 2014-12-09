(function() {
  'use strict';

  var express = require('express'),
      router  = express.Router();

    router.get('/bunutan/index.html', function( req, res ) {
      res.render('bunutan/index.html');
    });

    module.exports = router;
})();
