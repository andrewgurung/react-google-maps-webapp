var React = require('react');
var Search = require('./Search');
var Map = require('./Map');
var CurrentLocation = require('./CurrentLocation');
var LocationList = require('./LocationList');

var App = React.createClass({
  render() {
    return (
      <div>
        <h1>Your Google Maps Locations</h1>
        <Search />
        <Map />
        <CurrentLocation />
        <LocationList />
      </div>
    );
  }
});

module.exports = App;
