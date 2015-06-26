var React = require('react');

// https://facebook.github.io/react/docs/top-level-api.html
var App = React.createClass({
  render: function () {
    return React.DOM.div(null, 'Hello World!')
  }
});


var elem = document.querySelector('body');
React.render(App, elem);
