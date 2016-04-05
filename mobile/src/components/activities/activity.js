var React = require('react-native');
var Button = require('../common/button');
var _ = require('underscore');

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
         placeholder={ 'Please add a title...' }
         onChangeText={ (text) => this.updateActivity({ title: text }) }
         value = { this.state.activity.title }
        />
        <TextInput
          style={ [ styles.input, { flex: 3 }, isNew ? styles.editable : null ] } 
          multiline={true}
          maxLength={200}
          editable={ isNew }
          placeholder={'Describe what makes this place so special...'}
          onChangeText={ (text) => this.updateActivity({ description: text }) }
          value = { this.state.activity.description }
        />
        { isNew ? // only show 'save' button if this is a NEW activity
            <View style={styles.buttonWrapper}>
              <Button text={'Save'} onPress={ this.save }/>
            </View>
            : null
        }
      </View> 
    );
  },

  // setState replaces ENTIRE element (can't set properties etc.)
  updateActivity: function( newValue ) {
    this.setState({
      activity: _.extend( this.state.activity, newValue )
    });
  },

  save: function() {
    this.props.navigator.popToTop();
    this.props.route.passProps.initiateSave( this.state.activity );
  },

});


var styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30, // offset for wifi, time, battery etc. display
    paddingBottom: 14
  },

  image: {
    flex: 6,
  },

  input: {
    flex: 0,
    margin: 4,
    padding: 8,
    fontSize: 18,
    height: 36
  },

  editable: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 3
  },

  buttonWrapper: {
    flex: 0,
    alignItems: 'center'
  }

});