'use strict';

/* Services */
angular.module('myApp')
    .factory('dataFactory', ['$http', function($http) {

    var urlBase = 'http://localhost/';
    /*var apiKey = 'sadads13123';*/
    var dataFactory = {};

    dataFactory.addTrip = function(data) {
        return $http.get(urlBase +'customer/fleet-account-login/', data);
    }

    return dataFactory;
}]);