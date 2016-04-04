var React = require('react-native');
var Button = require('../common/button');

var {
  StyleSheet,
  View,
  Image,
  TextInput
} = React;


module.exports = React.createClass({

  getInitialState: function() {
    return {
      activity: this.props.route.passProps.activity
    };
  },

  render: function() {

    var isNew = this.props.route.passProps.isNew;

    return (

      <View style={styles.container}>
        <Image style={ styles.image }
          source={ require('./demo-activity.jpg')}
        />
        <TextInput
         style={ [styles.input, { textAlign: 'center' }, isNew ? styles.editable : null ] }
         editable={ isNew }
         placeholder={ 'add a title...' }
         value = { this.state.activity.title }
        />
        <TextInput
          style={ [ styles.input, { flex: 3 }, isNew ? styles.editable : null ] } 
          multiline={true}
          maxLength={200}
          editable={ isNew }
          placeholder={'What makes this place so special?'}
          value = { this.state.activity.description }
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
    alignItems: 'center',
    paddingTop: 30, // offset for wifi, time, battery etc. display
    paddingBottom: 14
  },

  image: {
    flex: 4,
  },

  input: {
    flex: 0,
    margin: 4,
    padding: 8,
    fontSize: 18,
    height: 36
  },

  editable: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3
  },

  buttonWrapper: {
    flex: 0,
    alignItems: 'center'
  }

})