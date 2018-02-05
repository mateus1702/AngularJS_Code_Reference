'use strict';

angular.
  module('task').
  factory('Task', ['$resource',
    function($resource) {
      return $resource('http://localhost:55189/api/task/:Id', { Id: '@Id' }, {
        update: {
          method: 'PUT'
        },
        delete: {
          method: 'DELETE'
        }
      });
    }
  ]);
