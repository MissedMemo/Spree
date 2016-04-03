var React = require('react-native');
var FloatingButton = require('../common/floating-button');

var {
  StyleSheet,
  MapView,
  View,
  Text
} = React;

module.exports = React.createClass({

  getInitialState: function() {
    return {
      markers: [], // for pins
    };
  },

  componentWillMount: function(){
  },

  render: function() {

    return(

      <View style={ styles.container }>
      
        <MapView
          style={styles.map}
          annotations={ this.state.mapPins }
          showsUserLocation={true}
          followUserLocation={true}
        />
        <FloatingButton  onPress={ this.addActivity } text='+' />
      </View>
    );
  },


  addActivity: function() {
    this.props.navigator.push( {name: 'activities'} )
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
    marginTop: 24 // offset for wifti, time, battery etc. display
  },

});