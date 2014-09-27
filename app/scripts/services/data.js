'use strict';

/**
 * @ngdoc service
 * @name websitePortfolioApp.data
 * @description
 * # data
 * Factory in the websitePortfolioApp.
 */
angular.module('websitePortfolioApp')
  .factory('data', function () {
    var portfolio = [
        {
            title: 'FRC Robotics',
            link: 'https://github.com/NutsAndColts/robot-test',
            description: 'The code to run the First Robotics Competition robot for Parkway Central Nuts & Colts for the 2014 competition during which I was co-captain of the team',
            status: 'normal'
        },
        {
            title: 'Physics Calculators',
            link: 'http://zachkimberg.com/physicssolver/physics_calculators.zip',
            description: 'Python physics calculators that allow you to enter in variables for common equations and automatically generate solutions. Requires the use of python and sympy(http://sympy.org/en/index.html) installed ',
            status: 'normal'

        },
        {
            title: 'Tab Capsule',
            link: 'https://chrome.google.com/webstore/detail/tab-capsule/gkmoglcaenkdhnghmglciniecdcepbmk?utm_source=chrome-ntp-icon',
            description: 'A chrome extension for productivity that allows you save tabs to reappear again tomorrow, next work week(Monday), next weekend(Saturday), or on a custom date. ',
            status: 'normal'
        },
        {
            title: 'Ads4Chairty',
            link: 'http://ads4charity.org/',
            description: 'A chrome extension I built with Dan Silver that allows you to donate to charities just by browsing the web. Available on the chrome store. ',
            status: 'broken'
        },
        {
            title: 'AZA Chapter Website',
            link: 'http://www.aeaza.zachkimberg.com/',
            description: 'A website made for the AZA youth group chapter to which I belonged',
            status: 'normal'
        },
        {
            title: 'Scheduler',
            link: 'http://www.scheduler.zachkimberg.com/',
            description: 'Task managing program. It is still in it\'s alpha stages so there are still some functions that I have not yet built into it. It can take in tasks and then tell you what to do based on time available. ',
            status: 'unfinished'
        },
        {
            title: 'Greenzach',
            link: 'http://www.zachkimberg.com/greenzach',
            description: 'Old website from my barmitzvah project talking about green energy',
            status: 'normal'
        },
        {
            title: 'Games',
            description: 'A ton of games I made several years ago using Processing',
            subitems: [
                {
                    title: 'Running Game',
                    link: 'http://www.zachkimberg.com/games/Running_Game',
                    description: 'Running Game',
                    status: 'broken'
                },
                {
                    title: '4 Player Pong',
                    link: 'http://www.zachkimberg.com/games/4_Player_Pong/index.html',
                    description: 'A pong game for 2 to 4 players',
                    status: 'broken'
                },
                {
                    title: 'Age of War',
                    link: 'http://www.zachkimberg.com/games/Age_Of_War/index.html',
                    description: 'A age of war competitive strategy game for 2 players',
                    status: 'broken'
                },
                {
                    title: 'Color Sliders',
                    link: 'http://www.zachkimberg.com/games/Color_Sliders/index.html',
                    description: 'Make background color by dragging RGB sliders',
                    status: 'broken'
                },
                {
                    title: 'Defend Castle',
                    link: 'http://www.zachkimberg.com/games/Defend_Castle/index.html',
                    description: 'Click the enemy dots before they reach your castle',
                    status: 'broken'
                },
                {
                    title: 'Succeeding Counting Game',
                    link: 'http://www.zachkimberg.com/games/Succeeding_counting/index.html',
                    description: 'How many numbers does it take before you get 1,2,3,4, then 5 in a row',
                    status: 'broken'
                },
                {
                    title: 'Tic Tac Toe',
                    link: 'http://www.zachkimberg.com/games/Tic_Tac_Toe/index.html',
                    description: 'Basic Tic Tac Toe Game',
                    status: 'broken'
                },
            ],
            status: 'broken'
        },
        {
            title: 'Cite',
            link: 'http://www.zachkimberg.com/cite',
            description: 'A citation maker. Currently only has book and website in MLA.',
            status: 'normal'
        },
        {
            title: 'Physics Solver',
            link: 'http://www.zachkimberg.com/physicssolver',
            description: 'Enter data for 2d kinematics formula and it will calculate the rest',
            status: 'normal'
        },
        {
            title: 'Software',
            description: 'Contains random software for download that I made',
            subitems: [
                {
                    title: 'Text Analyzer',
                    link: 'http://www.zachkimberg.com/software/textAnalyzer.exe',
                    description: 'Can analyze text file, generate random file based on example, and compare two files to see how similar they are',
                    status: 'normal'
                },
                {
                    title: 'Code Checker',
                    link: 'http://www.zachkimberg.com/software/CodeChecker.exe',
                    description: 'Will do a basic check of a file for semicolons and brackets matching',
                    status: 'normal'
                },
            ],
            status: 'normal'
        },
        {
            title: 'Timer Land',
            link: 'http://www.zachkimberg.com/timerland',
            description: 'Create many timers and alarms',
            status: 'normal'
        }
    ];

    return {
      getPortfolio: function () {
        return portfolio;
      },
      getPortfolioItem: function (item) {
        return portfolio[item];
      }
    };
  });
