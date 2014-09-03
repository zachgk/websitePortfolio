'use strict';

/**
 * @ngdoc function
 * @name websitePortfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websitePortfolioApp
 */
angular.module('websitePortfolioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
