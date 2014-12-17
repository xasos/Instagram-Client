angular.module('Instagram', ['ngRoute', 'ngMessages'])
	.config(function($routeProvider) {
$routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  })
  .when('/signup', {
    templateUrl: 'views/signup.html',
    controller: 'SignupCtrl'
  })
  .when('/photo/:id', {
    templateUrl: 'views/detail.html',
    controller: 'DetailCtrl'
  })
  .otherwise('/');			
	});
