'use strict';

angular.
  module('angularJSUIApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/task', {
          template: '<task-list></task-list>'
        }).
        when('/task/create', {
          template: '<task-create></task-create>'
        }).
        when('/task/read/:Id', {
          template: '<task-read></task-read>'
        }).
        when('/task/update/:Id', {
          template: '<task-update></task-update>'
        }).
        when('/task/delete/:Id', {
          template: '<task-delete></task-delete>'
        }).
        when('/home', {
          template: '<home></home>'
        }).
        otherwise('/home');
    }
  ]);
