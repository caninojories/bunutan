(function() {
  'use strict';

  var express = require('express'),
      router  = express.Router();

    router.get('/client/bunutan/index.html', function( req, res ) {
      res.render('client/bunutan/index.html');
    });

    module.exports = router;
})();
