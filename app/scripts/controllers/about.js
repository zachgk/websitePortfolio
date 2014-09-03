'use strict';

/**
 * @ngdoc function
 * @name websitePortfolioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the websitePortfolioApp
 */
angular.module('websitePortfolioApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
