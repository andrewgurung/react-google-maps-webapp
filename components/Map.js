const React = require('react');

var Map = React.createClass({
  render() {
    return (
      <div className="map-holder">
        <p>Loading...</p>
        <div id="map"></div>
      </div>
    );
  }
});

module.exports = Map;
