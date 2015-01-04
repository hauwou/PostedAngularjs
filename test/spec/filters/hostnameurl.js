'use strict';

describe('Filter: hostnameUrl', function () {

  // load the filter's module
  beforeEach(module('postedApp'));

  // initialize a new instance of the filter before each test
  var hostnameUrl;
  beforeEach(inject(function ($filter) {
    hostnameUrl = $filter('hostnameUrl');
  }));

  it('should return the input prefixed with "hostnameUrl filter:"', function () {
    var text = 'angularjs';
    expect(hostnameUrl(text)).toBe('hostnameUrl filter: ' + text);
  });

});
