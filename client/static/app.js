var app = angular.module('DojoDating', ['ngRoute']);  //route provider and http interceptors

app.config(function($routeProvider, $httpProvider){  //check http request from server and redirects if neccessary
    // $httpProvider.interceptors.push(
    //     function($q, $location) {
    //     return {
    //         'responseError':function(rejection){
    //         if (rejection.status == 401){
    //             $location.url('/login');
    //         }
    //         return $q.reject(rejection);
    //     }
    //     };
    // });
    $routeProvider         
        .when('/register',{
            templateUrl:'partials/register.html',
            controller:'userController'           
        })
        .when('/login',{
            templateUrl:'/partials/login.html'
        })
        .when('/search',{
            templateUrl:'/partials/search.html'
        })
        .when('/userprofile/:id',{
            templateUrl:'partials/userprofile.html'
        })
        .otherwise({
            redirectTo:'/'
        })
})
