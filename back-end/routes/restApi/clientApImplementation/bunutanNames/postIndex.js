(function() {
  'use strict';

  var fs    = require('fs'),
      path  = require('path');

  exports.postBunutanNames = function( req, res, next ) {
    console.log( req.body );
    var dir = path.normalize(__dirname + '../../../../../runnable');
    fs.appendFile( dir + '/bunotNames.txt', req.body.name + '\n', function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log('The file was saved!');
        res.json( {response: 'success'});
      }
    });
  };
})();
