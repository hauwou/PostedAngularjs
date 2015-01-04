/* global PostedApp */
'use strict';

/**
 * @ngdoc function
 * @name postedApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the postedApp
 */
PostedApp.controller('NavCtrl', ['$scope', '$location', 'Post', 'Authen',
  function($scope, $location, Post, Authen) {

    $scope.signedIn = Authen.signedIn;
    $scope.logout = Authen.logout;
    $scope.user = Authen.user;

    $scope.post = {
      url: 'http://initialload.com',
      title: 'navcontroller'
    };
    /*$scope.submitPost = function() {

      Post.create($scope.post).then(function(cbData) {
        //console.log(cbData.key);

        $scope.post = {
          url: 'http://www.adcdobds.com',
          'title': 'navcontroller'
        };

        $location.path('/posts/' + cbData.key());
      });

    };*/

    $scope.submitPost = function() {
      $scope.post.creator = $scope.user.profile.username;
      $scope.post.creatorUID = $scope.user.uid;
      Post.create($scope.post).then(function(ref) {
        $location.path('/posts/' + ref.name());
        $scope.post = {
          url: 'http://',
          title: ''
        };
      });
    };

  }
]);
