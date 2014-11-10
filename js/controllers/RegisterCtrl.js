'use strict';

MyModule.controller('RegisterCtrl', function($scope, $http){
    $scope.user = {};

    $scope.SubmitForm = function(isValid){
        if(isValid){

			var method = 'PUT';

			var url = 'http://127.0.0.1:8000/fleet-account/signup/';

			$scope.codeStatus = "";

			var FormData = {
			  'name' : $scope.user.name,
			  'username' : $scope.user.username,
			  'password' : $scope.user.password
			};
			
			$http({
			  method: method,
			  url: url,
			  data: FormData,
			  dataType : 'jsonp',
			  jsonp:'jsonp'
			}).
			success(function(response) {
			    $scope.codeStatus = response.status;
			}).
			error(function(response) {
			    $scope.codeStatus = response.status || "Request failed";
			});
        }
    };
});