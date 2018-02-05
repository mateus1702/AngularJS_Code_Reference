'use strict';

angular.
  module('task').
  component('taskList', {
     templateUrl: '/task/task-list/task-list.template.html',
     controller: ['$scope', 'Task',
       function TaskListController($scope, Task) {
         $scope.loading = true;
         this.tasks = Task.query(function() {
           $scope.loading = false;
         });
       }
     ]
  });
