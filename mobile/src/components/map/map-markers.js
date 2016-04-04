var React = require('react-native');

var {
  StyleSheet,
  TouchableOpacity,
  Image
} = React;


module.exports = {

  selected: false,

  createPin: function( callback ) {
    return {
      longitude: -122.4046101306659,
      latitude: 37.78151983393839,
      view:
        <TouchableOpacity onPress={ callback } >
          <Image style={ styles.image }  source={ require('./images/coffee.png') } />
        </TouchableOpacity>
    }
  }

};


var styles = StyleSheet.create({

  image: {
    width: 20,
    height: 20,
    resizeMode: 'cover'
  }

});
