'use strict';

angular.
  module('task').
  component('taskUpdate', {
     templateUrl: '/task/task-update/task-update.template.html',
     controller: ['$scope', 'Task', '$routeParams' ,'$location',
       function TaskUpdateController($scope, Task, $routeParams, $location) {
         $scope.loading = true;
         $scope.task = Task.get({ Id: $routeParams.Id }, function(response) {
           $scope.loading = false;
           $scope.task.Date = new Date(response.Date);
           $scope.task.validation = {
             nameRequiredOk: true,
             dateRequiredOk: true
           };
         });

         $scope.update = function () {
           $scope.task.validation.nameRequiredOk = !$scope.task.Name ? false : true;
           $scope.task.validation.dateRequiredOk = !$scope.task.Date ? false : true;

           var isValid = true;
           angular.forEach($scope.task.validation, function(value, key) {
            isValid = isValid && value;
           });

           if (isValid) {
             $scope.loading = true;
             $scope.task.$update(function() {
               $scope.loading = false;
               $location.path( "/task" );
             });
           }
         }
       }
     ]
  });
