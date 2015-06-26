var React = require('react');

// https://facebook.github.io/react/docs/top-level-api.html
var state = {x: 1};

var App = React.createClass({
  render: function () {
    return React.DOM.div(null, 'Hello World! ' + this.props.x)
  }
});

var elem = document.querySelector('body');
React.render(React.createElement(App, state), elem);
