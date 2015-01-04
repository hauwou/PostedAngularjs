/* global PostedApp */
'use strict';

/**
 * @ngdoc function
 * @name postedApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the postedApp
 */
PostedApp.controller('signInCtrl', ['$scope', '$location', 'Post', 'Authen',
  function($scope, $location, Post, Authen) {

    $scope.signedIn = Authen.signedIn;
    $scope.logout = Authen.logout;
    $scope.user = Authen.user;

    $scope.post = {};

    $scope.submitPost = function() {

      $scope.post.creator = $scope.user.profile.username;

      $scope.post.creatorUID = $scope.user.uid;
        //alert($scope.post.creatorUID);
      Post.create($scope.post).then(function(ref) {
          //console.log(ref);
        $location.path('/posts/' + ref.name());
        $scope.post = {
          url: 'http://example.com',
          title: 'Title Here'
        };
      });
    };

  }
]);
