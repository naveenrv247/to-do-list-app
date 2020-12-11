var app=angular.module('app',[]);
app.controller('people',function($scope,$http){
    $http({
        method: 'get', 
        url: 'http://localhost:8081/js%20tutorials/data.json'
    }).then(function (response) {
        console.log( response.data.records);
        $scope.persons = response.data.records;
    },function (error){
        console.log(error, 'can not get data.');
    });
    
});