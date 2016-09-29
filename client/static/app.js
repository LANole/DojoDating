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
        .when('/login',{
            templateUrl:'/partials/login.html'
        })
        .when('/register',{
            templateUrl:'partials/register.html',
            controller:'userController'           
        })
        .when('/create',{
            templateUrl:'partials/preferences.html',
            controller:'userController'
        })
        .when('/search',{
            templateUrl:'/partials/search.html'
        })
        .when('/profile/:id',{
            templateUrl:'partials/profile.html'
        })
        .otherwise({
            redirectTo:'/'
        })
})
