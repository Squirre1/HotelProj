import {
  CREATE_HOTEL,
  UPDATE_HOTEL,
  DELETE_HOTEL,
} from '@constants/actions';

export function deleteHotel(id) {
  return {
    type: DELETE_HOTEL,
    data: id,
  };
}

export function createHotel(values) {
  return {
    type: CREATE_HOTEL,
    data: values,
  };
}

export function updateHotel(id, values) {
  return {
    type: UPDATE_HOTEL,
    data: { hotelId: id, values },
  };
}
