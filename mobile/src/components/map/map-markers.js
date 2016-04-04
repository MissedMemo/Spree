var React = require('react-native');

var {
  TouchableOpacity,
  Text,
  Image
} = React;


module.exports = {

  createPin: function( callback ) {
    return {
      longitude: -122.4046101306659,
      latitude: 37.78151983393839,
      view: <TouchableOpacity style={ { alignItems: 'center' } } onPress={ callback } >
        <Text style={{fontWeight: 'bold', color: '#f007'}}>
          cooler spot!
        </Text>
        <Image
          style={{width: 20, height: 20, resizeMode: 'cover'}}
          source={ require('../images/icon_pub.png') }
        />
      </TouchableOpacity>
    }
  }

};
