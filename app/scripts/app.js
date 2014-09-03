'use strict';

/**
 * @ngdoc overview
 * @name websitePortfolioApp
 * @description
 * # websitePortfolioApp
 *
 * Main module of the application.
 */
angular
  .module('websitePortfolioApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
