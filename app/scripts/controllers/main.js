'use strict';

/**
 * @ngdoc function
 * @name websitePortfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websitePortfolioApp
 */
angular.module('websitePortfolioApp')
  .controller('MainCtrl', function ($scope, data) {
    $scope.portfolio = data.getPortfolio();
  });
