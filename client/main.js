
var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
$routeProvider
        .when('/friends/edit/:_id', {
          templateUrl: '/partials/edit.html',
          controller: 'editController',
        })
        .when('/friends/new', {
          templateUrl: '/partials/new.html',
          controller: 'newController',

        })
        .when('/friends/:_id/delete', {
          templateUrl: '/partials/delete.html',
          controller: 'editController',
        })
        .when('/friends/index', {
          templateUrl: '/partials/index.html',
          controller: 'newController',
        })
        .when('/friends/:_id', {
          templateUrl: '/partials/show.html',
          controller: 'editController',
        })
        .otherwise({
          redirectTo: '/friends/index'
        });
});