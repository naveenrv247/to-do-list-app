var application = angular.module('app',[]);

application.factory('random',function(){
    var randObj={};
    var num=Math.floor(Math.random()*10);
    randObj.generate = function(){
        return num;
    };
    return randObj;
});

application.controller('app',function($scope,random){
    $scope.generaterandom=function(){
        $scope.rn=random.generate();
    };
});