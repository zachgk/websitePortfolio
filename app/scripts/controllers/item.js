'use strict';

/**
 * @ngdoc function
 * @name websitePortfolioApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the websitePortfolioApp
 */
angular.module('websitePortfolioApp')
  .controller('ItemCtrl', function ($scope, $routeParams, data) {
    $scope.item = data.getPortfolioItem($routeParams.item);
  });
