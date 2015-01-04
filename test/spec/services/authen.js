'use strict';

describe('Service: Authen', function () {

  // load the service's module
  beforeEach(module('postedApp'));

  // instantiate service
  var Authen;
  beforeEach(inject(function (_Authen_) {
    Authen = _Authen_;
  }));

  it('should do something', function () {
    expect(!!Authen).toBe(true);
  });

});
