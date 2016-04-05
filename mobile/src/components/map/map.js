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

    var newActivity = { title: '', description: '', region: {} };

    this.props.navigator.push({
      name: 'camera',
      passProps: { isNew: true, initiateSave: this.endAddActivity, activity: newActivity }
    });
  },

  endAddActivity: function( newActivity ) {

    console.log( 'saving new activity:', newActivity );

    /*
    navigator.geolocation.getCurrentPosition( location => {
      newActivity.region.latitude = location.coords.latitude;
      newActivity.region.longitude = location.coords.longitude;
    });
    */
    
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