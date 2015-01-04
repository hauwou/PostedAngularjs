/* global PostedApp */
'use strict';


/**
 * @ngdoc service
 * @name postedApp.Profile
 * @description
 * # Profile
 * Service in the postedApp.
 */
PostedApp
  .service('Profile',['$window', 'FIREBASE_URL', '$firebase', 'Post', '$q', function ($window, FIREBASE_URL, $firebase, Post, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      //var ref = new $window.Firebase(FIREBASE_URL);
      var ref = new  Firebase(FIREBASE_URL);

  var profile = {
    get: function (userId) {
      return $firebase(ref.child('profile').child(userId)).$asObject();
    },
    getPosts: function(userId) {
      var defer = $q.defer();

      $firebase(ref.child('user_posts').child(userId))
        .$asArray()
        .$loaded()
        .then(function(data) {
          var posts = {};

          for(var i = 0; i<data.length; i++) {
            var value = data[i].$value;
            posts[value] = Post.get(value);
          }
          defer.resolve(posts);
        });

      return defer.promise;
    }
  };

  return profile;


  }]);
