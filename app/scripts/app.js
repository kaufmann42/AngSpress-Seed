'use strict';

/**
 * @ngdoc overview
 * @name AngSpress-Seed
 * @description
 * # AngSpress-Seed
 *
 * Main module of the application.
 */
angular
  .module('AngSpress-Seed', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngAnimate-animate.css'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
