'use strict';

angular.module('myNgAppApp')
  .controller('LoginCtrl', function ($scope) {
    $scope.email = '';
    $scope.password = '';
    $scope.isLoggedIn = false;

    $scope.validate = function() {
      var email = $scope.email;
      var password = $scope.password;
      if(email === 'admin@app.com' && password ==='1234')
      {
        // spoof a validation success
        $scope.isLoggedIn = true;
      }
      else
      {
        $scope.isLoggedIn = false;
      }
    };
  });