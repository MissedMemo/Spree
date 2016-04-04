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
    var activity = this.props.route.passProps.activity;

    return (

      <View style={styles.container}>
        <TextInput
         style={ [styles.input, isNew ? styles.editable : null ] }
         editable={ isNew }
         placeholder={ 'add a title...' }
         value = { isNew ? '' : activity.title }
        />
        <TextInput
          style={ [ styles.input, {height: 90}, isNew ? styles.editable : null ] } 
          multiline={true}
          maxLength={200}
          editable={ isNew }
          placeholder={'What makes this place so special?'}
          value = { isNew ? '' : activity.description }
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
    margin: 4,
    padding: 8,
    fontSize: 18
  },

  editable: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    alignItems: 'center'
  },

  buttonWrapper: {
    alignItems: 'center'
  }

})