'use strict';

/**
 * @ngdoc function
 * @name rnaUiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rnaUiApp
 */
angular.module('rnaUiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
