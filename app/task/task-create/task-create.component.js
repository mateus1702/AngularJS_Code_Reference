'use strict';

angular.
  module('task').
  component('taskCreate', {
     templateUrl: '/task/task-create/task-create.template.html',
     controller: ['$scope', 'Task', '$location',
       function TaskCreateController($scope, Task, $location) {
         $scope.task = new Task();
         $scope.task.validation = {
           nameRequiredOk: true,
           dateRequiredOk: true
         };

         $scope.create = function () {
           $scope.task.validation.nameRequiredOk = !$scope.task.Name ? false : true;
           $scope.task.validation.dateRequiredOk = !$scope.task.Date ? false : true;

           var isValid = true;
           angular.forEach($scope.task.validation, function(value, key) {
            isValid = isValid && value;
           });

           if (isValid) {
             $scope.loading = true;
             Task.save($scope.task, function() {
               $scope.loading = false;
               $location.path( "/task" );
             });
           }
         }
       }
     ]
  });
