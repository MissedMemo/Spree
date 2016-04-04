var React = require('react-native');
var Button = require('../common/button');

var {
  StyleSheet,
  View,
  Text,
  TextInput
} = React;


module.exports = React.createClass({

  render: function() {

    var isNew = this.props.route.passProps.isNew;

    return (

      <View style={styles.container}>
        <TextInput
         style={styles.input}
         editable={ isNew }
         placeholder={ 'add a title...' }
        />
        <TextInput
          style={ [ styles.input, {height: 90}] } 
          multiline={true}
          maxLength={200}
          editable={ isNew }
          placeholder={'What makes this place so special?'}
        />
        <View style={styles.buttonWrapper}>
          <Button text={'Save'} onPress={ this.save }/>
        </View>
      </View> 
    )
  },

  save: function() {
    this.props.navigator.popToTop();
  },

})

var styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  input: {
    height: 36,
    borderColor: 'black',
    margin: 4,
    padding: 8,
    borderWidth: 1,
    borderRadius: 3,
    fontSize: 18
  },

  buttonWrapper: {
    alignItems: 'center'
  }

})