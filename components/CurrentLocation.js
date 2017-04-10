const React = require('react');

var CurrentLocation = React.createClass({
  toggleFavorite() {
    // Trigger onFavoriteToggle on App.js file
    this.props.onFavoriteToggle(this.props.address);
  },

  render() {
    var starClassName = "glyphicon glyphicon-star-empty";

    if(this.props.favorite) {
			starClassName = "glyphicon glyphicon-star";
		}

    return (
      <div className="current-location col-xs-12 col-md-6 col-md-offset-3">
        <h4 id="save-location">{this.props.address}</h4>
        <span className={starClassName} onClick={this.toggleFavorite} aria-hidden="true"></span>
      </div>
    );
  }
});

module.exports = CurrentLocation;
