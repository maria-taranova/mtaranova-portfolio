'use strict';
var myApp = angular.module('portfolio', ['portfolio.services', 'portfolio.filters']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider.when('/',{
        templateUrl:'partials/home.html',
      })
     .when('/design',{
        templateUrl:'partials/design.html',
        controller:'DesignCtrl'
      })
      .when('/about',{
        templateUrl:'partials/about.html',
        controller:'AboutCtrl'
      })
    .when('/about/me', {
        templateUrl:'partials/about.html',
        controller:'AboutCtrl'
      })
    .when('/about/contacts', {
        templateUrl:'partials/about.html',
        controller:'AboutCtrl'
      })
    .when('/development',{
        templateUrl:'partials/development.html',
        controller:'DevelopmentCtrl'
      })
    .when('/featured',{
        templateUrl:'partials/featured.html',
        controller:'FeaturedCtrl'
      })
      .when('/:id', {
        templateUrl:'partials/project.html',
        controller:'ProjectCtrl'
      })
        .otherwise({
        redirectTo: '/'
      });
}]);

