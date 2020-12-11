var appX=angular.module('appx',[]);

appX.controller('app',function($scope){
    $scope.tasks = [];
    $scope.task="";
    var taskData = localStorage['taskList'];
    if (taskData !=undefined){
        $scope.tasks=JSON.parse(taskData);

    }
    $scope.searchEnter=function(){
        if (event.code=='Enter' && $scope.task != ""){
            $scope.addTask();
        } 
    };
    $scope.addTask=function(){
        
        $scope.tasks.push({'taskInfo':$scope.task,'status':'incomplete'});
        console.log($scope.tasks);
        $scope.task='';
        localStorage['taskList']=JSON.stringify($scope.tasks);

    };
    $scope.delTask=function(taskInfo){
        console.log(taskInfo);
        for (var i=0;i<$scope.tasks.length;i++){
            if ($scope.tasks[i].taskInfo==taskInfo){
                $scope.tasks.splice(i,1);

            }
        }
        localStorage['taskList']=JSON.stringify($scope.tasks);
    };
    $scope.contentEdit=function(msg){
        
        console.log(event.target.contentEditable);
        for (var i=0;i<$scope.tasks.length;i++){
            if ($scope.tasks[i].taskInfo==msg){
                $scope.tasks[i].taskInfo=event.target.innerText;

            }
        }
        event.target.contentEditable=event.target.contentEditable=="false"?"true":"false";
        localStorage['taskList']=JSON.stringify($scope.tasks);
    };
    $scope.enterAgain=function(msg){
        console.log(msg);
        if (event.code=='Enter' && msg != ""){
            $scope.contentEdit(msg);
            console.log("enter done");
        } 

    };
    $scope.update=function(){
        localStorage['taskList']=JSON.stringify($scope.tasks);
    };
});