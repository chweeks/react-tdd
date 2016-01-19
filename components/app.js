'use strict';

var React = require('react');
var Accordion = require('components/accordionComponent');
var input = [{
  id: 1,
  name: 'Title 1',
  content: 'Content belongs to title 1'
},{
  id: 2,
  name: 'Title 2',
  content: 'Content belongs to title 2'
}];


React.render(React.createElement(Accordion, {data: input}), document.getElementById('view'));
