const initialState = {
  hotel1 : {
    _id: 'hotel1',
    name: 'Hotel 1',
    city : {},
    stars: 4,
    created_at: 1474715158127,
    updated_at: 1474715158129,
    image: require('@appImages/hotel1.png'),
  },
  hotel2 : {
    _id: 'hotel2',
    name: 'Hotel 2',
    city : {},
    stars: 3,
    created_at: 1474715234037,
    updated_at: 1474715234039,
    image: require('@appImages/hotel2.png'),
  },
  hotel3 : {
    _id: 'hotel3',
    name: 'Hotel 3',
    city : {},
    stars: 5,
    created_at: 1474715253060,
    updated_at: 1474715253060,
    image: require('@appImages/hotel3.png'),
  },
};


export default function (state = initialState, action = {}) {

  const { type } = action;

  switch (type) {
    default:
      return state;
  }
}
