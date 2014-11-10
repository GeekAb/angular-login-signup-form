'use strict';

MyModule.controller('RegisterCtrl', function($scope){
    $scope.user = {};

    $scope.SubmitForm = function(isValid){
        if(isValid){
            console.log($scope.user);
            console.log('You are successfully register.');
            alert('You have successfully registered!\nname: ' + $scope.user.name + '\nusername: ' + $scope.user.username + '\npassword: ' + $scope.user.password );
        }
    };
});