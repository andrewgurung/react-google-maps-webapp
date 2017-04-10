const React = require('react');

var Map = React.createClass({
  // React Component lifecycle method that is
  // invoked immediately after a component is mounted.
  componentDidMount() {
    // This makes sure that our map initialization code is run the first time.
    this.componentDidUpdate();
  },

  // Invoked immediately after updating occurs. This method is not called for the initial render.
  componentDidUpdate() {
    if(this.lastLat == this.props.lat && this.lastLng == this.props.lng){
			// The map has already been initialized at this address.
			// Return from this method so that we don't reinitialize it (and cause it to flicker).
			return;
		}

    this.lastLat = this.props.lat;
    this.lastLng = this.props.lng;

    // Init Google maps
    var map = new GMaps({
      el: "#map",
      lat: this.props.lat,
      lng: this.props.lng
    });

    // Add Marker
    map.addMarker({
			lat: this.props.lat,
			lng: this.props.lng
		});
  },

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
