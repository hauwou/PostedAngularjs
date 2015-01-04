/* global PostedApp */
'use strict';

/**
 * @ngdoc function
 * @name postedApp.controller:PostviewctrlCtrl
 * @description
 * # PostviewctrlCtrl
 * Controller of the postedApp
 */
PostedApp
  .controller('PostViewCtrl', ['$scope', '$routeParams', 'Post', 'Authen',
    function($scope, $routeParams, Post, Authen) {

      $scope.eachPost = Post.get($routeParams.postId);
      $scope.comments = Post.comments($routeParams.postId);

      $scope.user = Authen.user;
      $scope.signedIn = Authen.signedIn;

      $scope.addComment = function() {

        if (!$scope.commentText || $scope.commentText === '') {


            return;
        }

       //console.log($scope.user.uid);

        var comment = {
          text: $scope.commentText,
          creator: $scope.user.profile.username,
          creatorUID: $scope.user.uid
        };
        $scope.comments.$add(comment);

        $scope.commentText = '';
      };

    $scope.deleteComment = function (comment) {
        $scope.comments.$remove(comment);
};


}]);
