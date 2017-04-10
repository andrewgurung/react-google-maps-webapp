var React = require('react');
var Search = require('./Search');
var Map = require('./Map');
var CurrentLocation = require('./CurrentLocation');
var LocationList = require('./LocationList');

var App = React.createClass({
  getInitialState() {
    // Extract favorites from local storage
    var favorites = [];
    if(localStorage.favorites) {
      favorites = JSON.parse(localStorage.favorites);
    }

    // Set default address
    return {
      favorites: favorites,
      currentAddress: 'Washington DC, USA',
      mapCoordinates: {
        lat: 38.9072,
        lng: -77.0369
      }
    };
  },
  render() {
    return (
      <div>
        <h1>Your Google Maps Locations</h1>
        <Search />
        <Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng}/>
        <CurrentLocation />
        <LocationList />
      </div>
    );
  }
});

module.exports = App;
