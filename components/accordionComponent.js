'use strict';

var React = require('react/addons');

var Accordion = React.createClass({displayName: "Accordion",
  render: function(){
    var panes = [];
    var data = this.props.data || [];

    data.forEach(function(item){
      panes.push(
        React.createElement("div", {key: data.id}, 
          React.createElement("div", {className: "accordion-header"}, 
            item.name
          ), 
          React.createElement("div", {className: "accordion-content"}, 
            item.content
          )
        )
      );
    });

    return (
      React.createElement("div", {className: "accordion"}, 
        panes
      )
    );
  }
});

module.exports = Accordion;
