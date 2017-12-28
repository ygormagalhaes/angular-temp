var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {

    $scope.cidades;

    $http({
        method: 'GET',
        url: 'http://ibge.herokuapp.com/municipio/?val=GO'
    }).then((response) => {
        $scope.cidades = response.data;
        console.log($scope.cidades);

    }, (response) => {
        console.log(response);

    });
});