'use strict';

/**
 * @ngdoc overview
 * @name adressVerwaltungApp
 * @description
 * # adressVerwaltungApp
 *
 * Main module of the application.
 */
angular
  .module('adressVerwaltungApp', [
    'ngResource',
    'ngRoute'
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
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
