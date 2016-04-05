var React = require('react-native');
import Camera from 'react-native-camera';

var  {
  StyleSheet,
  View,
  Text,
  Dimensions
} = React;

// Hold off using ES6 'Component' instantiation pattern for now (lacks auto-binding and mix-ins)
module.exports = React.createClass({

  render: function(){
    return (
      
      <View style={styles.container}>

        <Camera 
          ref={ (cam) =>  {
            this.camera = cam;
          }}
          style = {styles.preview}
          aspect = {Camera.constants.Aspect.fill}>
          <Text style={styles.captureButton} onPress={this.takePicture}>Capture</Text>
        </Camera>
      </View>
    )
  },

  takePicture: function(){
    this.camera.capture()
      .then( (data) => {

        console.log( "image data:", data );

        // REPLACE existing view, relaying activity info. to new view
        this.props.navigator.replace({
          name: 'activity',
          passProps: this.props.route.passProps
        });

      })
      .catch(err => console.error(err))
  }

})

var styles = StyleSheet.create({

  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },

  captureButton: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
  
})