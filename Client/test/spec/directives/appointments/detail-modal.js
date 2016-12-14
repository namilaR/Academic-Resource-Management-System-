'use strict';

describe('Directive: appointments/detailModal', function () {

  // load the directive's module
  beforeEach(module('armsAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<appointments/detail-modal></appointments/detail-modal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the appointments/detailModal directive');
  }));
});
