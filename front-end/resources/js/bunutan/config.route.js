(function() {
  'use strict';

  angular
    .module('app.bunutan')
    .run(appRun);

    function appRun(routehelper) {
      routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
      return [{
        state: 'bunutan',
        config: {
          url: '/bunutan',
          templateUrl: '/bunutan/index.html',
          controller: 'Bunutan as vm',
          title: 'Bunutan'
        }
      }];
    }
})();
