var React = require('react-native');

var {
  StyleSheet,
  TouchableHighlight,
  Image
} = React;


module.exports = {

  create: function( activity, callback ) {

    console.log( 'creating pin for activity:', activity );

    return {
      longitude: activity.region.longitude,
      latitude: activity.region.latitude,
      view:
        <TouchableHighlight onPress={ ()=> callback( activity ) } >
          <Image style={ styles.image }  source={ require('./images/coffee.png') } />
        </TouchableHighlight>
    }
  }

};


var styles = StyleSheet.create({

  image: {
    width: 24,
    height: 24
  }

});
