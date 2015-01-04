/* global PostedApp */
'use strict';

/**
 * @ngdoc service
 * @name postedApp.post
 * @description
 * # post
 * Factory in the postedApp.
 */
PostedApp
  .factory('Post', ['$firebase', 'FIREBASE_URL',
    function($firebase, FIREBASE_URL) {
      // Service logic
      // ...
      var ref = new Firebase(FIREBASE_URL);
      var posts = $firebase(ref.child('posts')).$asArray();

      var Post = {
        all: posts,
        create: function(post) {
          return posts.$add(post).then(function(postRef) {
            $firebase(ref.child('user_posts').child(post.creatorUID))
              .$push(postRef.name());
              //console.log(postRef.name);
            return postRef;
          });
        },
        get: function(postId) {
          return $firebase(ref.child('posts').child(postId)).$asObject();
        },
        delete: function(post) {
          return posts.$remove(post);
        },
        comments: function(postId) {
          return $firebase(ref.child('comments').child(postId)).$asArray();
        }

      };

      return Post;


    }
  ]);
