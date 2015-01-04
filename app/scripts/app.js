/* global PostedApp:true */
/* exported PostedApp */
'use strict';

/**
 * @ngdoc overview
 * @name postedApp
 * @description
 * # postedApp
 *
 * Main module of the application.
 */
var PostedApp = angular.module('postedApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'firebase'
]);
PostedApp.config(function($routeProvider) {
  $routeProvider

  .when('/posts', {
    templateUrl: 'views/posts.html',
    controller: 'PostsCtrl'
  })
    .when('/posts/:postId', {
      templateUrl: 'views/showpost.html',
      controller: 'PostViewCtrl'
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'AuthenCtrl',
      resolve: {
        user: function(Authen) {
          return Authen.resolveUser();
        }
      }
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'AuthenCtrl',
      resolve: {
        user: function(Authen) {
          return Authen.resolveUser();
        }
      }
    })
    .when('/users/:userId', {
      templateUrl: 'views/profile.html',
      controller: 'ProfileCtrl'
    })
    .otherwise({
      templateUrl: 'views/posts.html',
      controller: 'PostsCtrl'
    });
});
PostedApp.constant('FIREBASE_URL', 'https://blistering-torch-4798.firebaseio.com/');
