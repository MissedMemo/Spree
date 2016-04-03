var React = require('react-native');
var Button = require('../common/button');

var {
  StyleSheet,
  View,
  Text,
  TextInput
} = React;


module.exports = React.createClass({

  render: function(){
    return (

      <View style={styles.container}>
        <TextInput
         style={styles.input}
         editable={ this.props.route.passProps.isNew }
         placeholder={ 'add a title...' }
        />
        <TextInput
          style={ [styles.input, {height: 90}] } 
          multiline={true}
          maxLength={200}
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

  buttonWrapper: {
    alignItems: 'center'
  },

  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1
  }
})