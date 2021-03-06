'use strict';

describe('Controller: PostViewCtrl', function () {

  // load the controller's module
  beforeEach(module('postedApp'));

  var PostViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostViewCtrl = $controller('PostViewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
