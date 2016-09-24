import React from 'react';
import { View, Text, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HotelsListContainerSelector } from '@selectors';
import { Actions } from 'react-native-router-flux';
import NavigationBar from 'react-native-navbar';
import ResponsiveImage from 'react-native-responsive-image';
import StarRating from '@appComponents/StarRating/StarRating.js';
import { NavbarStyles, NavBarButton } from '@appComponents/NavBar';
import moment from 'moment';
import styles from './styles';

const ICON = require('@appImages/AddHotel.png');
let esLocale = require('moment/locale/ru');

const rightButton = (
  <NavBarButton
    handlerFunc={() => { Actions.hotelCard(); }}
    icon={ICON}
  />
);

class HotelsListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { hotels } = this.props;

    return (
      <View style={styles.hotelList}>
        <NavigationBar
          title="Hotels"
          tintColor="#00aeef"
          rightButton={rightButton}
          style={NavbarStyles.navBar}
          statusBar={{ style: 'light-content' }}
        />
        <ScrollView>
          {hotels.sort((objPrev, objNext) => { return objNext.stars - objPrev.stars; }).map(hotel => this.renderHotels(hotel))}
        </ScrollView>
      </View>
    );
  }

  renderHotels(hotel) {

    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => { Actions.hotelCard({ hotelId: hotel._id }); }}
      >
        <View key={hotel._id} style={styles.hotelItem}>
            <ResponsiveImage
              initWidth="72"
              initHeight="72"
              source={hotel.image || require('@appImages/defaulHotel.png')}
              style={styles.hotelPhoto}
            />
          <View style={styles.hotelInformation}>
            <Text style={styles.name}>{hotel.name}</Text>
            <StarRating
              maxStars={5}
              rating={hotel.stars}
              starColor={'#ff9900'}
              starSize={10}
              disabled
            />
          </View>
          <View style={styles.hotelTimes}>
            <Text style={styles.city}>{ hotel.city.description.split(',')[0] }</Text>
            <Text style={styles.created}>Создан: {moment(hotel.created_at).locale('ru', esLocale).format('DD/MM HH:mm')}</Text>
            <Text style={styles.edited}>Обновлен: {moment(hotel.updated_at).locale('ru', esLocale).format('DD/MM HH:mm')}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

HotelsListContainer.propTypes = {
  hotels: React.PropTypes.array,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export default connect(HotelsListContainerSelector, mapDispatchToProps)(HotelsListContainer);
