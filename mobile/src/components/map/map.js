var React = require('react-native');
var pinFactory = require('./map-markers');
var api = require('../network/api');
var Promise = require('bluebird');
import FloatingButton from '../common/floating-button';


var {
  StyleSheet,
  MapView,
  View
} = React;


module.exports = React.createClass({

  getInitialState: function() {
    return {
      mapMarkers: [],
    };
  },

  componentWillMount: function() {
    
    api.getNearbyActivities( region = null )
      .then( function( activities ) {

        this.setState({
          mapMarkers: activities.map( (activity) => pinFactory.create( activity, this.showActivity ) )
        });

      }.bind(this));

  },

  render: function() {

    return (
      <View style={ styles.container }>
        <MapView
          style={styles.map}
          annotations={ this.state.mapMarkers }
          showsPointsOfInterest={ false }
          showsUserLocation={ true }
          followUserLocation={ true }
        />
        <FloatingButton
          onPress={ this.startAddActivity }
          text='+'
          bkColor='#6e73ee'
          color='white'
        />
      </View>
    );
  },

  startAddActivity: function() {

    this.createEmptyActivity()
      .then( function( newActivity ) {

        this.props.navigator.push({
          name: 'camera',
          passProps: { isNew: true, initiateSave: this.endAddActivity, activity: newActivity }
        });

      }.bind(this));
  },

  endAddActivity: function( newActivity ) {
    
    // display new map pin right away

    this.setState({
      mapMarkers: this.state.mapMarkers.concat( [ pinFactory.create( newActivity, this.showActivity ) ] )
    });

    // post to server -- assume server & Database operations will succeed (for now)

    api.saveData( newActivity );

  },

  showActivity: function( activity ) {
    this.props.navigator.push({
      name: 'activity',
      passProps: { isNew: false, activity: activity }
    });
  },

  createEmptyActivity: function() {

    return new Promise( function( fulfill, reject ) {

      var newActivity = { title: '', description: '', region: {} };

      // geolocation call requires 'simulate location' to be active in XCode
      // otherwise, we'll default to TGA location in Berkeley...

      navigator.geolocation.getCurrentPosition(
        (location) => {
          newActivity.region.latitude = location.coords.latitude;
          newActivity.region.longitude = location.coords.longitude;
          console.log('succeeded getting geo coords');
          fulfill( newActivity );
        },
        (error) => {
          newActivity.region.latitude = 37.7873589;
          newActivity.region.longitude = -122.408227;
          console.log('failed getting geo coords:', error.message );
          fulfill( newActivity );
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );

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