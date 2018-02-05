'use strict';

angular.
  module('task').
  component('taskDelete', {
     templateUrl: '/task/task-delete/task-delete.template.html',
     controller: ['$scope', 'Task', '$routeParams', '$location',
       function TaskDeleteController($scope, Task, $routeParams, $location) {
         $scope.loading = true;
         $scope.task = Task.get({ Id: $routeParams.Id }, function(response) {
           $scope.loading = false;
           $scope.task.Date = new Date(response.Date);
         });

         $scope.delete = function () {
           $scope.loading = true;
           $scope.task.$delete(function() {
             $scope.loading = false;
             $location.path( "/task" );
           });
         }
       }
     ]
  });
