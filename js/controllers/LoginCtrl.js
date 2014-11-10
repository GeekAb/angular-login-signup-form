'use strict';

MyModule.controller('LoginCtrl',function($scope){
    $scope.user = {};

    $scope.SubmitForm = function(isValid){
        if(isValid){
            console.log($scope.user);
            console.log('You have successfully logged in!');
            alert('You have successfully logged in!\nusername: ' + $scope.user.username + '\npassword: ' + $scope.user.password );
        }
    };
})