import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HotelsListContainerSelector } from '@selectors';
import styles from './styles';

class HotelsListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <View>
        <Text>List</Text>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export default connect(HotelsListContainerSelector, mapDispatchToProps)(HotelsListContainer);
