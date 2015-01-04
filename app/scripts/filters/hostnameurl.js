/* global PostedApp */
'use strict';

/**
 * @ngdoc filter
 * @name postedApp.filter:hostnameUrl
 * @function
 * @description
 * # hostnameUrl
 * Filter in the postedApp.
 */
PostedApp
  .filter('hostnameUrl', function () {
    return function (input) {
      var url = document.createElement('a');

        url.href = input;

        return url.hostname;


    };
  });
