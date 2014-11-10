'use strict';

MyModule.directive('passwordMatch', function () {
    return {
        restrict: 'A',
        scope: true,
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            var firstPasswordID = '#' + attrs.passwordMatch;
            var firstPasswordEl = $(firstPasswordID);
            elem.add(firstPasswordID).on('keyup', function () {
                scope.$apply(function () {
                    console.log(elem.val() === firstPasswordEl.val());
                    ctrl.$setValidity('passwordMatch', elem.val() === firstPasswordEl.val());
                });
            });
        }
    }
});