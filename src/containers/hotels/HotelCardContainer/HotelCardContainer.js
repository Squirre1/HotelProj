import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HotelCardContainerSelector } from '@selectors';
import styles from './styles';

class HotelCardContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <View>
        <Text>Card</Text>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export default connect(HotelCardContainerSelector, mapDispatchToProps)(HotelCardContainer);
