/* global PostedApp */
'use strict';

/**
 * @ngdoc function
 * @name postedApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the postedApp
 * MUST include the global PostedApp line at the top to pass lint, including it in the jshintrc file does not work.
 */
PostedApp.controller('PostsCtrl', ['$scope', '$location','Post', 'Authen', function ($scope, $location, Post, Authen) {

      //$scope.postList = {};//this must be an object not array, array can't have string as index.
      $scope.postList = Post.all;
      $scope.user = Authen.user;
      $scope.post = {url: 'http://postscontroller.com', title: 'FFF'};
        //console.log($scope.postList);



      $scope.deletePost = function (post) {
        Post.delete(post);

      };



  }]);
