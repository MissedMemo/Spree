var React = require('react-native');

var {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image
} = React;


module.exports = {

  selected: false,

  createPin: function( callback ) {
    return {
      longitude: -122.4046101306659,
      latitude: 37.78151983393839,
      view:
        <TouchableOpacity style={ styles.marker } onPress={ this.handleClick } >
          { this.selected ? <Text style={ styles.title } >cooler spot!</Text> : null }
          <Image style={ styles.image }  source={ require('../images/icon_pub.png') } />
        </TouchableOpacity>
    }
  },

  handleClick: function() {
    alert( "selected is:", this.selected );
    if( this.selected ) {
      callback();
    }
    this.selected = !this.selected;
  }

};


var styles = StyleSheet.create({

  marker: {
    alignItems: 'center',
    padding: 3,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'blue',
  },

  title: {
    fontWeight: 'bold',
    color: 'green'
  },

  image: {
    width: 20,
    height: 20,
    resizeMode: 'cover'
  }

});
