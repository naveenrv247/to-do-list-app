var application = angular.module("app",['ngRoute']);
application.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'login.html'
    })
    .when('/dashboard',{
        resolve:{
            "check": function($location,$rootScope){
                if ($rootScope.loggedIn==false){
                    $location.path('/');
                }
               
        }},
        templateUrl:'dashboard.html'
        

    })
    .otherwise({
        redirectTo:'/'
    });
});

application.controller('loginctrl',function($scope,$location,$rootScope){
    $scope.submit = function(){
        var uname=$scope.username;
        var pass=$scope.password;
        if (uname=='naveen123' && pass=='naveen247@'){
            $rootScope.loggedIn=true;
            $location.path('/dashboard');

        }
        else {
            alert("wrong credentials");
        }

    };
});