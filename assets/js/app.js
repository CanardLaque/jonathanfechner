var myApp = angular.module('myApp', ['ngRoute','ngAnimate']);

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

  //This will hide the DIV by default.
  $scope.IsHidden = true;
  $scope.ShowHide = function () {
      //If DIV is hidden it will be visible and vice versa.
      $scope.IsHidden = $scope.IsHidden ? false : true;
  }

    $scope.IsHiddenn = true;
    $scope.ShowHidee = function () {
        //If DIV is hidden it will be visible and vice versa.
        $scope.IsHiddenn = $scope.IsHiddenn ? false : true;
    }

}]);


/*  $scope.visible = false ;

 $scope.hideshow = function (){
 $scope.visible = !$scope.visible;
 };*/
