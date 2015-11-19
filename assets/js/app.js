var myApp = angular.module('myApp', ['ngRoute','ngAnimate']); //ui-router

myApp.config(function ($routeProvider) {

  $routeProvider
      .when('/', {
        templateUrl: 'pages/main.html',
        controller: function(){}
      })

      .when('/propos', {
        templateUrl: 'pages/propos.html',
        controller: 'MainController'
      })
      .when('/intervention', {
        templateUrl: 'pages/intervention.html',
        controller: 'MainController'
      })

      .when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'MainController'
      })

      .when('/courstutos', {
          templateUrl: 'pages/courstutos.html',
          controller: 'MainController'
      });

});

myApp.controller('MainController', ['$scope', '$routeParams', function($scope, $routeParams) {




}]);
