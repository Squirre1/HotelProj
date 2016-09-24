import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { TextInput, View, ListView, Image, Text, Dimensions, TouchableHighlight, TouchableWithoutFeedback, Platform, ActivityIndicatorIOS, ProgressBarAndroid, PixelRatio } from 'react-native';
import Qs from 'qs';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

const defaultStyles = {
  container: {
    flex: 1,
  },
  textInputContainer: {
    height: 60,
    borderTopColor: '#7e7e7e',
    borderBottomColor: '#b5b5b5',
    borderTopWidth: 1 / PixelRatio.get(),
    borderBottomWidth: 1 / PixelRatio.get(),
  },
  textInput: {
    backgroundColor: 'black',
    underlineColorAndroid: 'rgba(0,0,0,0)',
    height: 28,
    borderRadius: 5,
    paddingTop: 4.5,
    paddingBottom: 4.5,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 7.5,
    marginLeft: 8,
    marginRight: 8,
    fontSize: 15,
  },
  poweredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  powered: {
    marginTop: 15,
  },
  listView: {
    // flex: 1,
  },
  row: {
    padding: 13,
    height: 44,
    flexDirection: 'row',
  },
  separator: {
    height: 1,
    backgroundColor: '#c8c7cc',
  },
  description: {
  },
  loader: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 20,
  },
  androidLoader: {
    marginRight: -15,
  },
};

export default class CustomGooglePlacesAutocomplete extends GooglePlacesAutocomplete {

	render() {
    let { onChangeText, onFocus, ...userProps } = this.props.textInputProps;
    return (
      <View
        style={[defaultStyles.container, this.props.styles.container]}
      >
        <View
          style={[defaultStyles.textInputContainer, this.props.styles.textInputContainer]}
        >
          <TextInput
            { ...userProps }
            ref="textInput"
            autoFocus={this.props.autoFocus}
            style={[defaultStyles.textInput, this.props.styles.textInput]}
            onChangeText={onChangeText ? text => {this._onChangeText(text); onChangeText(text)} : this._onChangeText}
            value={this.state.text}
            placeholder={this.props.placeholder}
            placeholderTextColor="white"
            tintColor={"white"}
            onFocus={onFocus ? () => {this._onFocus(); onFocus()} : this._onFocus}
            clearButtonMode="while-editing"
          />
          <Icon
            name="search"
            color={'#FFFFFF'}
            size={14}
            style={{ position: 'absolute', bottom: 15, left: 20, backgroundColor: 'transparent' }}
          />
        </View>
        {this._getListView()}
      </View>
    );
  }

}
