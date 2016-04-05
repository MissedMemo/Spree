var React = require('react-native');
var pinFactory = require('./map-markers');
var api = require('../network/api');
import FloatingButton from '../common/floating-button';


var {
  StyleSheet,
  MapView,
  View
} = React;


module.exports = React.createClass({

  getInitialState: function() {
    return {
      mapPins: [],
    };
  },

  componentWillMount: function() {
    
    api.getNearbyActivities( region = null )
      .then( function( activities ) {

        this.setState({
          mapPins: activities.map( (activity) => pinFactory.create( activity, this.showActivity ) )
        });

      }.bind(this));

  },

  render: function() {

    console.log( "markers:", this.state.mapPins );

    return (
      <View style={ styles.container }>
        <MapView
          style={styles.map}
          annotations={ this.state.mapPins }
          showsPointsOfInterest={ false }
          showsUserLocation={ true }
          followUserLocation={ true }
        />
        <FloatingButton
          onPress={ this.addActivity }
          text='+'
          bkColor='#6e73ee'
          color='white'
        />
      </View>
    );
  },

  /*
  setMapPins: function( region ) {

    api.getNearbyActivities( region )
      .then( function( activities ) {

        var pins = [];

        activities.forEach( (activity) => {
          var pin = pinFactory.create( activity, this.showActivity );
          console.log( 'pin is:', pin );
          pins.push( pin );
        });

        this.setState({
          mapPins: pins;
        });

      }.bind(this));
  },
  */

  addActivity: function() {
    var newActivity = { title: '', description: '' };
    this.props.navigator.push({
      name: 'camera',
      passProps: { isNew: true, activity: newActivity }
    });
  },

  showActivity: function( activity ) {
    this.props.navigator.push({
      name: 'activity',
      passProps: { isNew: false, activity: activity }
    });
  }

});


var styles = StyleSheet.create ({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: 30 // offset for wifi, time, battery etc. display
  },

  map: {
    flex: 1,
  }

});