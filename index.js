var app1 = angular.module('form', []);
app1.controller('validateCtrl', function($scope) {
    $scope.reg = 'URK20CS2172';
    $scope.email = 'rahul@gmail.com';
    $scope.name = 'Rahul';
});

var app2 = angular.module("myapp", ["ngRoute"]);
app2.controller("myctrl", ($scope) => {


});

app2.config(function($routeProvider) {
    $routeProvider.when('/URK20CS2172', {
        templateUrl: './student1.html'
    }).when('/URK20AI1072', {
        templateUrl: './student2.html'
    }).when('/URK20RA2002', {
        templateUrl: './student3.html'
    }).otherwise({ redirectTo: '/' })
});