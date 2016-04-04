var React = require('react-native');
var pinFactory = require('./map-markers');
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
    
    this.setState({
      mapPins: this.getMapPins()
    });

  },

  render: function() {

    return(
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

  getMapPins: function( region ) {
    return [
      pinFactory.createPin( this.showActivity )
    ];
  },

  addActivity: function() {
    this.props.navigator.push( {name: 'camera'} );
  },

  showActivity: function( activity ) {
    this.props.navigator.push({
      name: 'activity',
      passProps: { isNew: false, activity }
    });
  }

})


var styles = StyleSheet.create ({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },

  map: {
    flex: 1,
    marginTop: 30 // offset for wifi, time, battery etc. display
  }

});