import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HotelCardContainerSelector } from '@selectors';
import { Actions } from 'react-native-router-flux';
import { NavbarStyles, NavBarButton } from '@appComponents/NavBar';
import StarRating from '@appComponents/StarRating/StarRating.js';
import ResponsiveImage from 'react-native-responsive-image';
import NavigationBar from 'react-native-navbar';
import { createHotel, updateHotel, deleteHotel } from '@actions';
import CustomGooglePlacesAutocomplete from '@appComponents/CustomGooglePlacesAutocomplete';
import { styles, ButtonStyle } from './styles';

const ICON = require('@appImages/back-icon.png');
const leftButton = (
  <NavBarButton
    handlerFunc={() => { Actions.hotelsList(); }}
    icon={ICON}
  />
);

class HotelCardContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      stars: 0,
    };
  }

  render() {
    const { hotels } = this.props;
    const hotel = hotels[this.props.hotelId];

    return (
      <View>
        <NavigationBar
          title={ hotel ? 'Редактирование' : 'Создание'}
          tintColor="#00aeef"
          leftButton={leftButton}
          style={NavbarStyles.navBar}
          statusBar={{ style: 'light-content' }}
        />
        {this.renderGoogleAutoComplete(hotel)}
        <View style={[styles.propertyContainer, { paddingTop: 10, paddingBottom: 10 }]}>
          <ResponsiveImage
            initWidth="120"
            initHeight="120"
            source={ hotel ? hotel.image : require('@appImages/defaulHotel.png')}
            style={styles.hotelPhoto}
          />
        </View>
        { hotel ? this.renderEditing(hotel) : this.renderCreating() }
        { hotel && this.renderDeleteButton(hotel) }
      </View>
    );
  }

  renderCreating() {
    const { name, stars } = this.state;

    return (
      <View>
        <View style={[styles.propertyContainer, { height: 48 }]}>
          <Text style={ styles.propertyLabel }>Название</Text>
          <TextInput
            style={ styles.propertyField }
            onChangeText={(name) => this.setState({ name })}
            value={name}
          />
        </View>
        <View style={[styles.propertyContainer, { paddingTop: 10, paddingBottom: 10, height: 52 }]}>
          <StarRating
            maxStars={5}
            rating={stars}
            starColor={'#ff9900'}
            starSize={30}
            selectedStar={ (star) => this.setState({ stars: star }) }
          />
        </View>
        {this.renderCreateButton()}
      </View>
    );
  }

  renderEditing(hotel) {
    const { updateHotel } = this.props;

    debugger;

    return (
      <View>
        <View style={[styles.propertyContainer, { paddingTop: 10, paddingBottom: 10, height: 48 }]}>
          <Text style={ styles.propertyLabel }>Название</Text>
          <TextInput
            style={ styles.propertyField }
            onChangeText={(name) => updateHotel(hotel._id, { name })}
            value={hotel.name}
          />
        </View>
        <View style={[styles.propertyContainer, { paddingTop: 10, paddingBottom: 10, height: 52 }]}>
          <StarRating
            maxStars={5}
            rating={hotel.stars}
            starColor={'#ff9900'}
            starSize={30}
            selectedStar={ (star) => updateHotel(hotel._id, { stars: star }) }
          />
        </View>
      </View>
    );
  }

  renderGoogleAutoComplete( hotel ) {
    const { updateHotel } = this.props;

    return (
      <CustomGooglePlacesAutocomplete
        placeholder='Search'
        minLength={2} // minimum length of text to search
        autoFocus={false}
        fetchDetails
        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
          console.log(data);
          console.log(details);
        }}
        getDefaultValue={() => {
          return hotel ? hotel.city.description : ''; // text input default value
        }}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: 'AIzaSyBRPQEhFnnbBGqUETse5_LQndI-3bfABEw',
          language: 'ru', // language of the results
        }}
        styles={{
          description: {
            fontWeight: 'bold',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
          textInputContainer: {
            flexDirection: 'row',
            height: 64,
            borderTopColor: '#7e7e7e',
            borderBottomColor: '#b5b5b5',
            borderTopWidth: 0,
            borderBottomWidth: 0,
            paddingTop: 20,
            marginTop: -20,
          },
          textInput: {
            underlineColorAndroid: 'rgba(0,0,0,0)',
            flex: 2,
            borderColor: '#000000',
            color: 'white',
            height: 28,
            borderRadius: 15,
            paddingTop: 4.5,
            paddingBottom: 4.5,
            paddingLeft: 30,
            paddingRight: 10,
            marginTop: 7.5,
            marginLeft: 8,
            marginRight: 8,
            fontSize: 15,
          },
        }}

        nearbyPlacesAPI='GoogleReverseGeocoding'
        onPress={(data, details = null) => {
          hotel ? updateHotel(hotel._id, { city: data }) : this.setState({ city: data });
        }}
        GooglePlacesSearchQuery={{
          rankby: 'distance',
          types: 'food',
        }}
        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
      />
    );
  }

  renderCreateButton() {
    return (
      <TouchableOpacity style={{ borderRadius: 25 }} onPress={ () => { this.props.createHotel(this.state); Actions.hotelsList(); }} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
        <View style={ButtonStyle.buttonBackground}>
          <Text style={ButtonStyle.text}>Создать</Text>
        </View>
      </TouchableOpacity>
    );
  }

  renderDeleteButton(hotel) {
    return (
      <TouchableOpacity style={{ borderRadius: 25 }} onPress={ () => { this.props.deleteHotel(hotel._id); Actions.hotelsList(); }} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
        <View style={ButtonStyle.buttonBackground}>
          <Text style={ButtonStyle.text}>Удалить</Text>
        </View>
      </TouchableOpacity>
    );
  }

}

HotelCardContainer.propTypes = {
  hotels: React.PropTypes.object,
  deleteHotel: React.PropTypes.func,
  createHotel: React.PropTypes.func,
  updateHotel: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createHotel,
    updateHotel,
    deleteHotel,
  }, dispatch);
}

export default connect(HotelCardContainerSelector, mapDispatchToProps)(HotelCardContainer);
