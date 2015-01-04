/* global PostedApp */
'use strict';

/**
 * @ngdoc function
 * @name postedApp.controller:AuthenCtrl
 * @description
 * # AuthenCtrl
 * Controller of the postedApp
 */
PostedApp
  .controller('AuthenCtrl',['$scope', '$location', 'Authen', 'user', function ($scope, $location, Authen, user) {
    /*if (user){
        $location.path('/');
   }*/
      //console.log(user);

    if (Authen.signedIn()) {
        $location.path('/');
    }

    $scope.login = function () {
      Authen.login($scope.user).then(function (successData) {
        $location.path('/');
          //console.log(Authen.user);
      }, function (error) {
          console.log('login with no email entries');
      $scope.error = error.toString();
        });
    };


     $scope.register = function () {
         //console.log($scope.user);
        Authen.register($scope.user).then(function(user) {
          //console.log(user); //an object from firebase, no username, location info, etc...
        return Authen.login($scope.user).then(function() {

            //must manually add user properties to user object here, the user object returned from Authen.register only contains email hash and uid
            user.username = $scope.user.username;
            user.location = $scope.user.location;
            user.twitter= $scope.user.twitter;
            user.website = $scope.user.website;



            //console.log(user);

            return Authen.createProfile(user);
      }).then(function() {
            $location.path('/');
        });
    }, function(error) {
      $scope.error = error.toString();
    });
  };


  }]);
