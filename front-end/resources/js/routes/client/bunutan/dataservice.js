(function() {
  'use strict';

  angular
    .module('app.bunutan')
    .factory('BunutanDataService', BunutanDataService);

    BunutanDataService.$inject = ['bunutanNamesServiceApi','exception'];

    function BunutanDataService( bunutanNamesServiceApi, exception ) {
      var service = {
        getBunutanNames : getBunutanNames,
        postBunutanNames: postBunutanNames
      };

      return service;

      function getBunutanNames( api, param ) {
        return bunutanNamesServiceApi.all( api )
          .getList( param )
          .then( getBunutanNamesCallback )
          .catch(function( message ) {
            exception.catcher('Error in getting the Names in the Bunutan');
          });

          function getBunutanNamesCallback( response, status, header, config ) {
            return response;
          }
      }

      function postBunutanNames( api, param ) {
        return bunutanNamesServiceApi.all( api )
          .post( param )
          .then( postBunutanNamesCallback )
          .catch(function( message ) {
            exception.catcher('Error in getting the Names in the Bunutan');
          });

        function postBunutanNamesCallback( response, status, header, config ) {
          return response;
        }
      }
    }
})();
