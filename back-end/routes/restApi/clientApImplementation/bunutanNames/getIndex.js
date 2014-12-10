(function() {
  'use strict';

  var fs    = require('fs'),
      path  = require('path');

  exports.getBunutanNames = function( req, res, next ) {
    var dir = path.normalize(__dirname + '../../../../../runnable');
    console.log( dir );
    fs.readFile( dir + '/bunutan.txt', 'utf8', function( error, data ) {
      var dataSplit = data.split('\n');
      var tempDataSplit = dataSplit;
      fs.readFile( dir + '/bunotNames.txt', 'utf8', function( error, data ) {
        var bunotNames = data.split('\n');
        bunotNames.forEach(function( name ) {
          var index = dataSplit.indexOf(name);
          dataSplit.splice( index, 1);
          console.log( dataSplit );
        });
        res.json( dataSplit );
      });
    });
  };
})();
