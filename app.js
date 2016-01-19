'use strict';

var React = require('react');
var Accordion = require('components/accordionComponent');
var input = [{
  name: 'Title 1',
  content: 'Content belongs to title 1'
},{
  name: 'Title 2',
  content: 'Content belongs to title 2'
}];

React.render(<Accordion data={input}/>, document.getElementById('view'));
