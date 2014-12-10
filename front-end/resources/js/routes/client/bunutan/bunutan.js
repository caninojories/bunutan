(function() {
  'use strict';

  angular
  .module('app.bunutan')
  .controller('Bunutan', Bunutan);

  Bunutan.$inject = ['$q', '$timeout', 'ngAudio', 'BunutanDataService'];

  function Bunutan($q, $timeout, ngAudio, BunutanDataService) {
    var vm = this;

    vm.timeOut = 0;
    vm.getYourMonitoMonita = getYourMonitoMonita;

    vm.tempBunutanNames = ['mommy norma',
      'mommy ludy',
      'lola lilia',
      'potpot',
      'jeffry',
      'jr(bang-bang)',
      'tito alvin',
      'tita rose',
      'mig',
      'maggie',
      'daddy rico'];

    init();

    function init() {
      getBunutanNames();
    }

    function getBunutanNames() {
      return $q.all( getBunutanNamesCallback() );
    }

    function getBunutanNamesCallback() {
      return BunutanDataService.getBunutanNames( 'bunutanNames', {} )
        .then(function( response ) {
          console.log( response );
          vm.bunutanNames = response;
          return response;
        });
    }

    function getYourMonitoMonita() {
      vm.disabled = true;
      timeout();
    }

    function timeout() {
      $timeout(function () {
        if( vm.timeOut <= 15 ) {
          var rand = Math.floor((Math.random() * vm.tempBunutanNames.length));
          vm.bunotName = vm.tempBunutanNames[rand];
          vm.timeOut = vm.timeOut + 1;
          if( vm.timeOut === 15 ) {
            var random = Math.floor((Math.random() * vm.bunutanNames.length));
            vm.bunotName = vm.bunutanNames[random];
            vm.nabunotMo = true;
          }
          timeout();
        }
        if( vm.timeOut === 15 ) {
          console.log( vm.timeOut );
          postBunutanNames();
          vm.timeOut = vm.timeOut + 1;
        }
      }, 350);
    }

    function postBunutanNames() {
      return $q.all( postBunutanNamesCallback())
        .then(function( response ) {
          $timeout(function() {
            window.location.reload();
          }, 5000);
          return response;
        });
    }

    function postBunutanNamesCallback() {
      return BunutanDataService.postBunutanNames( 'bunutanNames', {name: vm.bunotName} )
        .then(function( response ) {
          return response;
        });
    }
  }
})();
