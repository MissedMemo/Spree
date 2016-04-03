var React = require('react-native');
var Icon_Restaurant = require('../images/icon_restaurant.png');
var Icon_Shopping = require('../images/icon_shopping.png');
var Icon_Pub = require('../images/icon_pub.png');
var Button = require('../common/button');

var {
  Component,
  StyleSheet,
  MapView,
  TouchableOpacity,
  Image,
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

  render: function(){

    return(

      <View style={ styles.container }>
      
        <MapView
          style={styles.map}
          annotations={ this.state.mapPins }
          showsUserLocation={true}
          followUserLocation={true}
        />
        <TouchableOpacity  onPress={ this.addActivity }>
          <View style={ styles.floatingButton } >
            <Text style={ styles.buttonText }>+</Text>
          </View>
        </TouchableOpacity>
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

  floatingButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    paddingTop: 3,
    paddingRight: 10,
    paddingBottom: 3,
    paddingLeft: 10,
    borderRadius: 20,
    backgroundColor: '#6e73ee',
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },

  buttonText: {
    flex: 1,
    alignSelf: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  }

});