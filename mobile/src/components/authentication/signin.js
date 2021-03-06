var React = require('react-native');
var {
  View,
  Text,
  StyleSheet,
  TextInput
} = React;

var Button = require('../common/button');

module.exports = React.createClass({
  //what is the default
  getInitialState: function() {
    return {
      username: '',
      password: ''
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>
        
        
        <Text style={styles.label}>Username:</Text>
        <TextInput 
          style={styles.input}
          //on the re-render the value uses the updated value of state
          value={this.state.username}
          //whenever the user updates their text, update the state
          onChangeText={(text) => this.setState({username: text})}
        />
        
        
        <Text style={styles.label}>Password:</Text>
        <TextInput 
        secureTextEntry={true} 
        style={styles.input}
        value={this.state.password}
        onChangeText={(text) => this.setState({password: text})}
        />
        
        
        <Button text={'Sign In'} onPress={this.onPress}/>
      </View>
    );
  },
  onPress: function () {
   
    //log the user in
      

    // sets the password to an empty string after pressing sign in
    this.setState({
      password: ''
    });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  }
});