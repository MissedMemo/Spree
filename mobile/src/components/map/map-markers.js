var React = require('react-native');

var {
  StyleSheet,
  TouchableHighlight,
  Image
} = React;


module.exports = {

  createPin: function( callback ) {
    return {
      longitude: -122.4046101306659,
      latitude: 37.78151983393839,
      view:
        <TouchableHighlight onPress={ ()=> callback( {title: 'Coolest XYZ Place', description: 'blah blah blah blah blah blah blah blah'} ) } >
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
