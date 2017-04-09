const React = require('react');

var LocationItem = React.createClass({
  render() {
    var cn = "list-group-item";

		if(this.props.active){
			cn += " active-location";
		}

    return (
      <a className={cn}>
        <span className="createdAt"></span>
        <span className="glyphicon glyphicon-menu-right"></span>
      </a>
    );
  }
});

module.exports = LocationItem;
