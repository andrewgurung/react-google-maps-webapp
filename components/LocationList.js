const React = require('react');
const LocationItem = require('./LocationItem');

var LocationList = React.createClass({
  render() {
    return (
      <div>
        <h2>LocationList</h2>
        <ul>
          <li><LocationItem /></li>
        </ul>
      </div>
    )
  }
});

module.exports = LocationList;
