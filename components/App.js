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

  toggleFavorite(address) {
    if(this.isAddressInFavorites(address)) {
      this.removeFromFavorites(address);
    } else {
      this.addToFavorites(address);
    }
  },

  addToFavorites(address) {
    var favorites = this.state.favorites;

    favorites.push({
      address: address,
      date: Date.now()
    });

    this.setState({
      favorites: favorites
    });

    this.localStorage.favorites = JSON.stringify(favorites);
  },


  removeFromFavorites(address){
		var favorites = this.state.favorites;
		var index = -1;

		for(var i = 0; i < favorites.length; i++){
			if(favorites[i].address == address){
				index = i;
				break;
			}
		}
		// If it was found, remove it from the favorites array
		if(index !== -1){
			favorites.splice(index, 1);
			this.setState({
				favorites: favorites
			});
			localStorage.favorites = JSON.stringify(favorites);
		}
	},

	isAddressInFavorites(address){
		var favorites = this.state.favorites;
		for(var i = 0; i < favorites.length; i++){
			if(favorites[i].address == address){
				return true;
			}
		}
		return false;
	},

  render() {
    return (
      <div>
        <h1>Your Google Maps Locations</h1>
        <Search />
        <Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng}/>
        <CurrentLocation address={this.state.currentAddress} favorite={this.isAddressInFavorites(this.state.currentAddress)} onFavoriteToggle={this.toggleFavorite} />
        <LocationList />
      </div>
    );
  }
});

module.exports = App;
