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
    $scope.portfolio = [
        {
            title: 'Physics Calculators',
            link: 'http://zachkimberg.com/physicssolver/physics_calculators.zip',
            description: 'Python physics calculators that allow you to enter in variables for common equations and automatically generate solutions. Requires the use of python and sympy(http://sympy.org/en/index.html) installed '
        },
        {
            title: 'Tab Capsule',
            link: 'https://chrome.google.com/webstore/detail/tab-capsule/gkmoglcaenkdhnghmglciniecdcepbmk?utm_source=chrome-ntp-icon',
            description: 'A chrome extension for productivity that allows you save tabs to reappear again tomorrow, next work week(Monday), next weekend(Saturday), or on a custom date. '
        },
        {
            title: 'Ads4Chairty',
            link: 'http://ads4charity.org/',
            description: 'A chrome extension I built with Dan Silver that allows you to donate to charities just by browsing the web. Available on the chrome store. '
        },
        {
            title: 'AZA Chapter Website',
            link: 'http://www.aeaza.zachkimberg.com/',
            description: 'A website made for the AZA youth group chapter to which I belonged'
        },
        {
            title: 'Scheduler',
            link: 'http://www.scheduler.zachkimberg.com/',
            description: 'Task managing program. It is still in it\'s alpha stages so there are still some functions that I have not yet built into it. It can take in tasks and then tell you what to do based on time available. '
        },
        {
            title: 'Greenzach',
            link: 'http://www.zachkimberg.com/greenzach',
            description: 'Old website from my barmitzvah project talking about green energy'
        },
        {
            title: 'Games',
            link: 'http://www.zachkimberg.com/games/list.html',
            description: 'A ton of games I made several years ago using Processing'
        },
        {
            title: 'Cite',
            link: 'http://www.zachkimberg.com/cite',
            description: 'A citation maker. Currently only has book and website in MLA.'
        },
        {
            title: 'Physics Solver',
            link: 'http://www.zachkimberg.com/physicssolver',
            description: 'Enter data for 2d kinematics formula and it will calculate the rest'
        },
        {
            title: 'Software',
            link: 'http://www.zachkimberg.com/software',
            description: 'Contains random software for download that I made'
        },
        {
            title: 'Timer Land',
            link: 'http://www.zachkimberg.com/timerland',
            description: 'Create many timers and alarms'
        }
    ];
  });
