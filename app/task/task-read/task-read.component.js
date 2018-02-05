'use strict';

angular.
  module('task').
  component('taskRead', {
     templateUrl: '/task/task-read/task-read.template.html',
     controller: ['Task', '$routeParams', '$scope',
       function TaskReadController(Task, $routeParams, $scope) {
         $scope.Id = $routeParams.Id;
         $scope.loading = true;
         $scope.task = Task.get({ Id: $routeParams.Id }, function(response) {
           $scope.loading = false;
           $scope.task.Date = new Date(response.Date);
         });
       }
     ]
  });
