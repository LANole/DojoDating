var app = angular.module('mean_project', ['ngRoute']);  //route provider and http interceptors

app.config(function($routeProvider, $httpProvider){  //check http request from server and redirects if neccessary
    $httpProvider.interceptors.push(
        function($q, $location) {
        return {
            'responseError':function(rejection){
            if (rejection.status == 401){
                $location.url('/login');
            }
            return $q.reject(rejection);
        }
        };
    });
})