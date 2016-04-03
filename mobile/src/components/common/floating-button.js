var React = require('react-native');

var {
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} = React;

module.exports = React.createClass({

  render: function() {

    return(
      <TouchableOpacity onPress={ this.props.onPress } >
        <View style={ styles.floatingButton } >
          <Text style={ styles.buttonText }>
            { this.props.text }
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

});


var styles = StyleSheet.create ({

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