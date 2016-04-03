var React = require('react-native');
var Map = require('./components/map/map');
var Activities = require('./components/activities/activities');
var Camera = require('./components/camera/camera');

var {
  Navigator,
} = React;

var Routes = {
  map: Map,
  activities: Activities,
  camera: Camera
};


module.exports = React.createClass({

  // every veiw gets access to navigator
  renderScene: function (route, navigator){
    var Component = Routes[ route.name ];
    return <Component route={route} navigator={navigator} />;
  },

  render: function () {
    return (
      <Navigator
        initialRoute={ {name: 'map'} }
        renderScene={ this.renderScene }
        configureScene={ ()=> Navigator.SceneConfigs.FloatFromRight }
      /> 
    )
  }
});
