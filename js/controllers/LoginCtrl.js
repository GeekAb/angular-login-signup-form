'use strict';

MyModule.controller('LoginCtrl',function($scope, $http){
    $scope.user = {};

    $scope.SubmitForm = function(isValid){
        if(isValid){

        	var method = 'GET';

			var url = 'http://127.0.0.1:8000/fleet-account/login/';

			$scope.codeStatus = "";

			var FormData = {
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

            console.log($scope.user);
            console.log('You have successfully logged in!');
            alert('You have successfully logged in!\nusername: ' + $scope.user.username + '\npassword: ' + $scope.user.password );
        }
    };
})