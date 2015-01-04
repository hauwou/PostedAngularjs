'use strict';

describe('Controller: AuthenCtrl', function () {

  // load the controller's module
  beforeEach(module('postedApp'));

  var AuthenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthenCtrl = $controller('AuthenCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
