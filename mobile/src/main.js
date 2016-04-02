var React = require('react-native');

var {
  Navigator,
} = React;

var Map = require('./components/map/map');
var Activities = require('./components/activities/activities');
var Camera = require('./components/camera/camera');

var Routes = {
  map: Map,
  activities: Activities,
  camera: Camera
};


module.exports = React.createClass({

  // every veiw given access to navigator
  renderScene: function (route, navigator){
    var Component = Routes[ route.name ];
    return <Component route={route} navigator={navigator} />;
  },

  render: function () {
    return (
      <Navigator
        initialRoute={ {name: 'map'} }
        renderScene={ this.renderScene }
        configureScene={ ()=> { return Navigator.SceneConfigs.FloatFromRight; } }
      /> 
    )
  }
});

