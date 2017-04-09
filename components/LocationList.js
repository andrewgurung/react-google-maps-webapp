const React = require('react');
const LocationItem = require('./LocationItem');

var LocationList = React.createClass({
  render() {
    return (
      <div className="list-group col-xs-12 col-md-6 col-md-offset-3">
        <span className="list-group-item active">Saved Locations</span>
        <LocationItem />
      </div>
    )
  }
});

module.exports = LocationList;
