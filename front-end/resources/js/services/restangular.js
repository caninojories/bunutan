(function() {
  'use strict';

  angular.module('app.restangular', [])
  .factory( 'bunutanNamesServiceApi', function ( Restangular ) {
    //return Restangular.all( 'mongo-api' )
    return Restangular.all( 'bunutanApi' );
  });
})();
