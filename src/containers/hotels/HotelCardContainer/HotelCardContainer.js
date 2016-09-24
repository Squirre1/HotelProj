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
    const { hotel } = this.props;

    return (
      <View>
        <NavigationBar
          title={ hotel ? 'Редактирование' : 'Создание'}
          tintColor="#00aeef"
          leftButton={leftButton}
          style={NavbarStyles.navBar}
          statusBar={{ style: 'light-content' }}
        />
        { hotel ? this.renderEditing(hotel) : this.renderCreating() }
        { hotel && this.renderDeleteButton(hotel) }
      </View>
    );
  }

  renderCreating() {
    const { name, stars } = this.state;

    return (
      <View>
        <View style={[styles.propertyContainer, { paddingTop: 10, paddingBottom: 10 }]}>
          <ResponsiveImage
            initWidth="120"
            initHeight="120"
            source={require('@appImages/defaulHotel.png')}
            style={styles.hotelPhoto}
          />
        </View>
        <View style={[styles.propertyContainer, { paddingTop: 10, paddingBottom: 10, height: 48 }]}>
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

    return (
      <View>
        <View style={[styles.propertyContainer, { paddingTop: 10, paddingBottom: 10 }]}>
          <ResponsiveImage
            initWidth="120"
            initHeight="120"
            source={hotel.image || require('@appImages/defaulHotel.png')}
            style={styles.hotelPhoto}
          />
        </View>
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
  hotel: React.PropTypes.object,
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
