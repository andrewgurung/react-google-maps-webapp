const React = require('react');

var CurrentLocation = React.createClass({
  render() {
    var starClassName = "glyphicon glyphicon-star-empty";

    if(this.props.favorite) {
			starClassName = "glyphicon glyphicon-star";
		}
    
    return (
      <div className="current-location col-xs-12 col-md-6 col-md-offset-3">
        <h4 id="save-location"></h4>
        <span className={starClassName} aria-hidden="true"></span>
      </div>
    );
  }
});

module.exports = CurrentLocation;
