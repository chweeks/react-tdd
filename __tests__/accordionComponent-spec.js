jest.dontMock('../scripts/accordionComponent.js');

describe('Accordion', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var Accordion;

  beforeEach(function() {
    Accordion = require('../scripts/accordionComponent');
  });

  it('should exist', function() {
    var accordion = TestUtils.renderIntoDocument( <Accordion /> );
    expect(TestUtils.isCompositeComponent(accordion)).toBeTruthy();
  });
});
