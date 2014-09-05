'use strict';

/**
 * @ngdoc directive
 * @name websitePortfolioApp.directive:portfolio
 * @description
 * # portfolio
 */
angular.module('websitePortfolioApp')
  .directive('portfolio', function () {
    return {
      templateUrl: 'scripts/directives/portfolio.html',
      restrict: 'E',
      scope: {
        portfolio: '='
      },
      replace: true
    };
  });
