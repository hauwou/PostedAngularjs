/* global PostedApp */
'use strict';

/**
 * @ngdoc function
 * @name postedApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the postedApp
 */
PostedApp
  .controller('ProfileCtrl', ['$scope', '$routeParams', 'Profile',
    function($scope, $routeParams, Profile) {

      var uid = $routeParams.userId;

      $scope.profile = Profile.get(uid);
        //console.log($scope.profile);
      Profile.getPosts(uid).then(function(posts) {
        $scope.posts = posts;
      });

}]);
