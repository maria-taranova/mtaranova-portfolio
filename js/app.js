'use strict';
var myApp = angular.module('portfolio', ['portfolio.services', 'portfolio.filters']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
 
    $locationProvider.html5Mode(true);
    
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
      .when('/development/:id', {
        templateUrl:'partials/project.html',
        controller:'ProjectCtrl'
      })
        .otherwise({
        redirectTo: '/'
      });
}]);

myApp.filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    });