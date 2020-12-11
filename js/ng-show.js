var app=angular.module('appx',[]);
app.controller('app',function($scope){
    $scope.s='no';
    $scope.show=function(){
        $scope.s='yes';
    };
});