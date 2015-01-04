/* global PostedApp */
'use strict';

/**
 * @ngdoc service
 * @name postedApp.Authen
 * @description
 * # Authen
 * Factory in the postedApp.
 * Firebase simple authentication routine. Codes are similar to firebase recommendation
 */
PostedApp
  .factory('Authen',['$firebaseSimpleLogin', 'FIREBASE_URL', '$rootScope','$firebase', function ($firebaseSimpleLogin, FIREBASE_URL, $rootScope,$firebase) {
    // Service logic
    // ...

    var ref = new Firebase(FIREBASE_URL);
    var authenLink = $firebaseSimpleLogin(ref);

    var Authen = {

        register: function (user) {
        //console.log( user);
        //console.log("Object is /"+user+ "/  authen registration factory ");
      return authenLink.$createUser(user.email, user.password);
        },

        createProfile: function (user) {
        //console.log(user);
        //console.log(user.location);

            var profile = {
                username: user.username,
                md5_hash: user.md5_hash,
                email: user.email,
                location: user.location,
                twitter: user.twitter,
                website: user.website

            };

            var profileRef = $firebase(ref.child('profile'));

            return profileRef.$set(user.uid, profile);
    },

        login: function (user) {
          return authenLink.$login('password', user);
        },
        logout: function () {
          authenLink.$logout();
        },
        resolveUser: function() {
            //being called from routing
          return authenLink.$getCurrentUser();
        },
        signedIn: function() {
          //console.log(Authen.user);
          return !!Authen.user.provider; // !! converts statement return value to boolean value
        },


    user: {}
};


    $rootScope.$on('$firebaseSimpleLogin:login', function(e, user) {
    console.log('logged in');

    angular.copy(user, Authen.user);
    Authen.user.profile = $firebase(ref.child('profile').child(Authen.user.uid)).$asObject();
    //console.log(Authen.user);

  });
  $rootScope.$on('$firebaseSimpleLogin:logout', function() {
    console.log('logged out');

    if(Authen.user && Authen.user.profile) {
    Authen.user.profile.$destroy();
    }


    angular.copy({}, Authen.user);
  });

  return Authen;



  }]);
