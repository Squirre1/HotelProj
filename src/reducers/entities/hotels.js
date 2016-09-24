import {
  CREATE_HOTEL,
  UPDATE_HOTEL,
  DELETE_HOTEL,
} from '@constants/actions';

import moment from 'moment';
import _ from 'underscore';

const initialState = {
  hotelId1 : {
    _id: 'hotelId1',
    name: 'Hotel 1',
    city : {},
    stars: 4,
    created_at: 1474715158127,
    updated_at: 1474715158129,
    image: require('@appImages/hotel1.png'),
  },
  hotelId2 : {
    _id: 'hotelId2',
    name: 'Hotel 2',
    city : {},
    stars: 3,
    created_at: 1474715234037,
    updated_at: 1474715234039,
    image: require('@appImages/hotel2.png'),
  },
  hotelId3 : {
    _id: 'hotelId3',
    name: 'Hotel 3',
    city : {},
    stars: 5,
    created_at: 1474715253060,
    updated_at: 1474715253060,
    image: require('@appImages/hotel3.png'),
  },
};

const emptyHotel = {
  _id: '',
  name: '',
};


export default function (state = initialState, action = {}) {

  const { type, data } = action;

  switch (type) {

    case CREATE_HOTEL:
      const hotelId = 'hotelId' + (parseInt(state['hotelId' + Object.keys(state).length]._id.split('Id')[1]) + 1);
      const creatingHotel = { [hotelId]: Object.assign(emptyHotel, data, { _id: hotelId, created_at: moment().valueOf(), updated_at: moment().valueOf() }) };
      return Object.assign({}, state, creatingHotel);

    case UPDATE_HOTEL:
      const changingHotel = Object.assign({}, state[data.hotelId], data.values, { updated_at: moment().valueOf() });
      return Object.assign({}, state, { [data.hotelId]: changingHotel });

    case DELETE_HOTEL:
      return _.omit(state, data);

    default:
      return state;
  }
}
