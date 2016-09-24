import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import styles from './style';


export default class NavBarButton extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={this.props.handlerFunc}
        style={styles.btnSmall}
      >
        <ResponsiveImage
          initWidth="31"
          initHeight="31"
          source={this.props.icon}
        />
      </TouchableHighlight>
    );
  }
}


NavBarButton.propTypes = {
  handlerFunc: React.PropTypes.func,
  icon: React.PropTypes.string,
};
