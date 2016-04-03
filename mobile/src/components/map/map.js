var React = require('react-native');
import FloatingButton from '../common/floating-button';


var {
  StyleSheet,
  MapView,
  View,
  Text
} = React;


module.exports = React.createClass({

  getInitialState() {
    return {
      isFirstLoad: true,
      mapRegion: undefined,
      mapPins: [],
    };
  },

  render() {

    if (this.state.isFirstLoad) {

      var updateMapPins = (region) => {
        return [{
          longitude: region.longitude,
          latitude: region.latitude,
          title: 'You Are Here',
        }];
      };

      var onRegionChangeComplete = (region) => {
        alert( "region:", region );
        this.setState({
          isFirstLoad: false,
          annotations: updateMapPins(region)
        });
      };
      
    }

    return(
      <View style={ styles.container }>
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
          annotations={ this.state.mapPins }
          showsUserLocation={true}
          followUserLocation={true}
          onRegionChangeComplete={ onRegionChangeComplete }
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

  addActivity() {
    this.props.navigator.push( {name: 'camera'} );
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