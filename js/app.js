'use strict';

var MyModule = angular.module('MyModule',["ngRoute"])
    .config(["$routeProvider", function($routeProvider){
        $routeProvider
            .when('/login', {
                templateUrl: 'templates/login-template.html',
                controller: 'LoginCtrl'
            })
            .when('/register', {
                templateUrl: 'templates/register-template.html',
                controller: 'RegisterCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }]);